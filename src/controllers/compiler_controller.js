const CompilationService = require('../services');

class CompilerController{

    async get(req, res){
        const service = new CompilationService();

        const { language } = req.body;
        const  saved_file_path = `${req.file.destination}/${req.file.filename}`;

        const response = await service.run(saved_file_path, language)
                                    .catch(err => ({'error': err.message}));
        console.info('CompilerController get ' + response )
        res.status(200).send(response);
    }
}


module.exports = CompilerController;