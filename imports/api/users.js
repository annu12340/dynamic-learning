import SimpleSchema from 'simpl-schema'
import { Accounts } from 'meteor/accounts-base'
import { Meteor } from 'meteor/meteor'

export const validateNewUser = (user)=>{

  const email = user.emails[0].address
 
  new SimpleSchema({
    email: {
      type: String,
      regEx: SimpleSchema.RegEx.Email
    }
  }).validate({email})

  return true
  
}

Meteor.methods({
  
  'getUsername'(_id) {

    const user = Meteor.users.findOne({_id})
    if(user)
      return user.username
  },

  'updateSchool'(username, school) {
    Meteor.users.update({username: username}, { $set: {'school': school} }); 
  },

  'addClass'(username, classcode) {
    Meteor.users.update({username: username}, { $push: {'classes': classcode} } )
  },


  'deleteAllClasses'(username) {
    Meteor.users.update({username: username}, { $set: {'classes': [] }})
  }

})

if(Meteor.isServer) {
  Accounts.validateNewUser(validateNewUser)

  Meteor.publish('getAccounts', function () {
    return Meteor.users.find(); 
  })


}


 
