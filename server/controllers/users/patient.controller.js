const User = require("../../models/user.model");
const responseHandler = require("../../utils/response");
const customError = require("../../utils/customError");
const Error = require("../../utils/error");

class userController {
  async create(req, res) {
    const {
      name,
      age,
      gender,
      martital_status,
      occupation,
      religion,
      level_of_education,
      address,
      next_of_kin_name,
      address_next_of_kin_name,
      password,
      phone_number,
    } = req.body;
    try {
      if (
        name &&
        age &&
        gender &&
        martital_status &&
        occupation &&
        religion &&
        level_of_education &&
        address &&
        next_of_kin_name &&
        address_next_of_kin_name &&
        password &&
        phone_number
      ) {
        let userExist = await User.findOne({ email: email });
        if (userExist) {
          throw Error(
            `Email ${email} already exist, try another one.`,
            "CONFLICT",
            409
          );
        }
        const hashedPassword = await passwordHash(password);
        const user = new User({
          name: name,
          age: age,
          gender: gender,
          martial_status: martital_status,
          occupation: occupation,
          religion: religion,
          level_of_education: level_of_education,
          address: address,
          next_of_kin_name: next_of_kin_name,
          address_next_kin_name: address_next_of_kin_name,
          email: email,
          password: hashedPassword,
          phone: phone_number,
          role: "User",
        });
        await user.save();
        return responseHandler(res, 201, "success", user);
      } else {
        throw Error("Invalid parameters provided", "MISSING ARGUMENTS", 419);
      }
    } catch (err) {
      console.log(err);
      return new customError(500, "Server Error");
    }
  }
}

module.exports = new userController();
