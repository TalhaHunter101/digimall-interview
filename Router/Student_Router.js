const express = require('express');
const StudentController = require('../Controller/Student_COntroller')
const router = express.Router();

router.use()..Router


// http methods 
router.post("/create", StudentController.CreteStudent);
router.get("/find",StudentController.FindStudent );
router.put("/update", StudentController.UpdateStudent);
router.delete("/delete",StudentController.Deletetudent );

module.exports = router;