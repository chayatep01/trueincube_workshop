db.zip.aggregate({
  $group :
      { _id:{ state: "$state" , city : "$city" },
        pop :  { $sum : "$pop"}
      }
    },{ $sort :{pop :1} } ,
    { $group :
      {
      _id: "$_id.state" ,
      biggestCity : { $last : "$_id.city"} ,
      biggestPop : { $last : "$pop"}

      }
  })


  db.topic.aggregate ( {
      $match :{ user_id : db.user.findOne({name:"james"})._id }
      } ,
      {
        $lookup :
        {
          from: "user" ,
          localField: "user_id" ,
          foreignField : "_id" ,
          as : "owner"
        }
      }
    ).pretty()



  db.sale.aggregate ([
    {
      $lookup :
      {
        form : " product ",
        localField: " item " ,
        foreignField : " name " ,
        as:"product_detail"
      }
    }
  ])
