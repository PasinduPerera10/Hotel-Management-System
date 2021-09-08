


const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({


    RoomTitle:{

type:String,
required:true
},

RoomNumber:{

    type:Number,
    required:true
    },
    
    RoomShortCode:{

        type:String,
        required:true
        },
 
        BedType:{

            type:String,
            required:true
            },

            Description:{

                type:String,
                required:true
                },

                NumberOfMaximumPersons:{

                    type:Number,
                    required:true
                    },

                    ExtraBed:{

                        type:String,
                        required:true
                        },

                            CleanningStatus:{

                                type:String,
                                required:true
                                },

                                BasePrice:{

                                    type:Number,
                                    required:true
                                    },

                                    AdditionalPersonPrice:{

                                        type:Number,
                                        required:true
                                        },

                                        ExtraBedPrice:{

                                            type:Number,
                                            required:true
                                            },

                                            Discount:{

                                                type:Number,
                                                required:true
                                                },

                                                TotalBasePrice:{

                                                    type:Number,
                                                    required:true
                                                    }
    

})

module.exports = mongoose.model('Room',roomSchema);