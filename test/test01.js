var mongoose = require("mongoose");
var customer = require("../lib/customer");
var should    	= require("chai").should();

//tell Mongoose to use a different DB - created on the fly
mongoose.connect('mongodb://localhost/tekpub_test');  
describe("Customers", function(){  
  var currentCustomer = null;  

  beforeEach(function(done){    
    //add some test data    
    customer.register("test@test.com", "password", "password", function(doc){      
      currentCustomer = doc;      
      done();    
    });  
  });  


  it("registers a new customer", function(done){    
    customer.register("test2@test.com", "password", "password", function(doc){      
      doc.email.should.equal("test2@test.com");      
      doc.crypted_password.should.equal("password");      
      done();    
    }, function(message){      
      message.should.equal(null);      
      done();    
    }); 
  }); 

  it("retrieves by email", function(done){    
    customer.findByEmail(currentCustomer.email, function(doc){      
      doc.email.should.equal("test@test.com");       
      done();    
    });  
  });   
});