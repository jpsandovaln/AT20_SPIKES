import User from '../models/User.js'
import Role from '../models/Role.js';

export const resolvers = {
    Query: {
        users: async() => await User.find(),
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

        createUser: async (_, { name, email, roleId, photo }) => {
            const user = new User({
              name,
              email,
              roleId
            })
      
            if (photo) {
              const { createReadStream, filename, mimetype, encoding } = await photo;
              const stream = createReadStream();
              const photoPath = `./uploads/${filename}`;
              await new Promise((resolve, reject) => {
                stream
                  .on('error', error => {
                    if (stream.truncated)
                      // Delete the truncated file
                      fs.unlinkSync(photoPath);
                    reject(error);
                  })
                  .pipe(fs.createWriteStream(photoPath))
                  .on('error', error => reject(error))
                  .on('finish', () => resolve());
              });
              user.photo = photoPath;
            }
      
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
    },
        User: {
            role: async(user) => await Role.findById(user.roleId),
            photos: async (user) => await Photo.find({ userId: user._id }),
    },
        Role: {
            users: async(role) => await User.find({roleId: role._id}),
    },
}