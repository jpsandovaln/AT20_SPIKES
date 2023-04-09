import User from '../models/UserModel.js'
import Role from '../models/RoleModel.js';
import { createWriteStream } from "fs";
import { uuid } from'uuidv4';
import bcrypt from 'bcrypt';


const saveFilesWithStream = ({ filename, mimetype, stream }) => {
    const path = `graphql/files/${filename}`;
    return new Promise((resolve, reject) =>
      stream
      .pipe(createWriteStream(path))
      .on("finish", () => resolve({ path, filename, mimetype }))
      .on("error", reject)
    );
  };

export const resolvers = {
    Query: {
        users: async() => await User.find(),
        /* `user:` is defining a resolver function for the `User` type. It specifies how to resolve the
        `role` field for a `User` object. In this case, it is using the `roleId` field of the `User`
        object to find the corresponding `Role` object and return it. */
        user: async(_, {_id}) => await User.findById(_id),
        roles: async() => await Role.find(),
        role: async(_, {_id}) => await Role.findById(_id),
    },
    Mutation: {
        createRole: async (_, {name}) => {
            const role = new Role({
                name
            })
            const roleSaved = await role.save();
            return roleSaved
        },

        createUser: async (_, {name, phone,email,firstPassword, roleId}) => {
            const user = new User({
                globalID:uuid(),
                name,
                phone,
                email,
                firstPassword: await bcrypt.hash(firstPassword, 10),
                password: '',
                roleId
            })
            const savedUser = await user.save();
          
            return savedUser;
        },

        deleteUser: async (_, {_id}) => {
            const deleteUser = await User.findByIdAndDelete(_id);
            if (!deleteUser) throw new Error('User not found');
            await Role.deleteMany({userId: deleteUser._id})
            return deleteUser;
        },

        deleteRole: async (_, {_id}) => {
            const deleteRole = await Role.findByIdAndDelete(_id);
            if (!deleteRole) throw new Error('Role not found');
            return deleteRole;
        },

        updateUser: async (_, args) => {
            const updateUser = await User.findByIdAndUpdate(args._id, args, {new: true});
            if(!updateUser) throw new Error('User not found');
            return updateUser;
        },
        singleUpload: async (_, args) => {
            const { filename, mimetype, createReadStream } = await args.file.file;
            const stream = createReadStream();
            await saveFilesWithStream({ filename, mimetype, stream });
            return filename;
        },
        login: async (_, {loginData, password}) => {
            const nameLoginSearch = await User.findOne({'name':loginData});
            const emailLoginSearch = await User.findOne({'email':loginData});
            const loginUser = nameLoginSearch || emailLoginSearch;
            if(!loginUser) {
                
                return 'User not found!';
            }
            else {
                if (loginUser.firstPassword && await bcrypt.compare(password, loginUser.firstPassword)) {
                    const userRole = await Role.findOne({'_id':loginUser.roleId});
                    console.log(userRole);
                    console.log(userRole._id);
                    return 'Please update your password';
                } else {
                    if (await bcrypt.compare(password, loginUser.password)) {
                        const userRole = await Role.findOne({'_id':loginUser.roleId});
                        console.log(userRole);
                        return 'Login Succesful!';
                       
                    } else {
                       
                        return 'Wrong password, try again';
                   
                    }
                }
            }
        },
        
    },
        User: {
            role: async(user) => await Role.findById(user.roleId),
    },
        Role: {
            users: async(role) => await User.find({roleId: role._id}),
    },
}