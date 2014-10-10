// here now I write down the first line of codes for node-push-framework 

// here is a readable framework for server

// what do a server need to be like? here is what my answer:

//  1.the server knows where sources are 
//  2.it indexes and stores the sources 
//  3.it provides interface for client url retrive sources 
//  4.it help render the interface cilent will see on their browser

// so we supply some library like js files in ./tool directory, corresponding 
// to what I say above.  

// some variable definition




function Run_Server()
{

 var New_Server =  Create_Server(SERVER_TYPE);
 New_Server.ObtainParams(params); 
 var Server_Proxy = ObtainPoxyForServer(New_Server,New_Server.PopParams());
 var Server_Context = require('tool/Server_Context.js');
 var Server_Ruunner = Server_Context.GetRunner();
 Server_Runner.run(Server_Proxy.GetServer());  // runner provides multi-process to ensure the service do not fail out of sudden

}



// the final main function
function main(argv)   // need to set the format of argv later
{

  Run_Server();

}

