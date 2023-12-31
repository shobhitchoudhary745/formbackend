const Form = require("../model/form");

/*============== Create form ==============*/
exports.createForm = async (req, res) => {
  try {
    // const { title, fields } = req.body;

    const form = req.body;
    const newForm = new Form(form);

    await newForm.save();

    res.status(201).json({
      message: "Form has been created",
      formData: form,
      status: "OK",
    });
  } catch (err) {
    res.status(400).json({
      message: "Form is not created!",
      error: err.message,
    });
  }
};

exports.getForm = async (req, res) => {
  try {
    const formData = await Form.find();

    res.status(200).json({
      message: "Form Found",
      formData,
      status: "OK",
    });
  } catch (err) {
    res.status(404).json({
      message: "Form is not Found!",
      error: err.message,
    });
  }
};




