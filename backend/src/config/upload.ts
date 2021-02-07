import multer from 'multer';
import path from 'path';

// Conferir a documentação do multer
export default {
  // trativa de images usando multer
  storage: multer.diskStorage({
    // usando o path para pegar o pwd atual tanto sendo mac ou windows....
    destination: path.join(__dirname, '..', '..', 'uploads'),
    // alterando nome na imagem
    // tendo a possibilidade de inserir o mesmo nome de diferente usuario
    //    assim  evitando sobre escrever o orimeiro arquivo.
    filename: (request, file, cb) => {
      const fileName = `${Date.now()}-${file.originalname}`;

      // callback ele retorna no primeiro parametro um erro(caso tenha ou null)
      cb(null, fileName);
    },
  }),
};
