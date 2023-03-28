const mongoose=require('mongoose');
const {Schema} = mongoose;

const QuizSchema= new Schema({
    category:{
        type:String,
        required:true
    },
    difficulty:{
        type:String,
        required:true,
    },

   
        
            question:{
                type:String,
                required:true
            },
            options:[
                {
                    option:{
                        type:String,
                        required:true
                    },
                   
                }
            ],
            anwser:{
                type:String,
                required:true
            },
            explaination:{
                type:String,
                required:true
            }
            
        
    
});

const Quiz=mongoose.model('Quiz',QuizSchema);

module.exports=Quiz;

