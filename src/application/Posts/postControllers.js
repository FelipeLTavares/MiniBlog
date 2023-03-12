const PostModel = require("../../db/models/Post.js");
const formParser = require("../Utils/handleFormData.js");
const Cloudinary = require("../../db/cloudinary.js");

class GenericController {
  async Get(req, res) {
    const { id, image, text } = req.query;

    try {
      const result = await PostModel.findAll();

      return res.json({ result });
    } catch (err) {
      return res.status(400);
    }
  }

  async Create(req, res) {
    const [fields, files] = await formParser(req);
    const x = files.image[0];

    const uploadData = await Cloudinary.upload(x);

    try {
      const result = await PostModel.create({
        text: fields.text,
        imageUrl: uploadData.url,
        imagePublicId: uploadData.publicId,
      });
      return res.status(201).json({ result });
    } catch (error) {
      return res.status(400);
    }
  }

  async Update(req, res) {
    const { id, image, text } = req.body;

    try {
      const result = await PostModel.update(
        {
          image,
          text,
        },
        {
          where: {
            id,
          },
        }
      );

      return res.status(201).json({ result });
    } catch (error) {
      return res.status(400);
    }
  }

  async Delete(req, res) {
    const { id } = req.query;

    try {
      const result = await PostModel.destroy({
        where: {
          id,
        },
      });

      return res.status(200).json({ result });
    } catch (err) {
      return res.status(400);
    }
  }
}

module.exports = GenericController;
