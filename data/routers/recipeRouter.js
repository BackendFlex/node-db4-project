express = require("express")
const db = require("../config")

const router = express.Router()

// router.get("/", async (req, res, next)=> {
//     try{

//     }
//     catch(err){
//         next(err)
//     }
// })





// ------  FROM THE CLASS PROJECT   --------

// router.get("/animals", async (req, res, next) => {
// 	try {
// 		const animals = await Animal.find()
// 		res.json(animals)
// 	} catch(err) {
// 		next(err)
// 	}
// })

// router.get("/animals/:id", async (req, res, next) => {
// 	try {
// 		const animal = await Animal.findById(req.params.id)
// 		if (!animal) {
// 			return res.status(404).json({
// 				message: "Animal not found",
// 			})
// 		}

// 		res.json(animal)
// 	} catch(err) {
// 		next(err)
// 	}
// })



module.exports = router