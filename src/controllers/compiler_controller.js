const loggerService = require('../../loggerService');
const CompilationService = require('../services');
const path = require('path');

class CompilerController{

    async get(req, res){
        try {
            const service = new CompilationService();
            const { language } = req.body;
            const { version } = req.body;
            const  saved_file_path = path.normalize(`${req.file.destination}/${req.file.filename}`);
            const response = await service.run(saved_file_path, language, version);
            loggerService.info({response}, 'OK!');
            res.status(200).send(response);
        } catch (error) {
            loggerService.error(error);
            res.status(404).send({'error': error.message});
        }
    }
}


module.exports = CompilerController;