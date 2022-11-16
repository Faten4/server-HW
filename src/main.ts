import Fastify from 'fastify';
const server = Fastify ({
    logger: true
  })
  
//  console.log('123');
// fastify.log.info('123');
// fastify.log.warn('123');
// fastify.log.error('123');


//   fastify.get('/',handler)
//   fastify.get('/gg',handler)

  //Q1
 
  const names = ['Faten','Sultan' , 'Ali'];
  server.route({
    method: 'GET',
    url:'/users', 
    handler: async (request, reply)=> {
    return (names);
    },
  });
  
//Q2

  server.route({
    method: 'GET',
    url:'/profile/ali',
    handler: async (request, reply)=> {
    return({ name: 'Ail', age:30, Specialization: 'Markting' })
    },
  });

  //Q3
  const instagram=[
    {username: 'sultan', photo:"", caption:'hi ' , likes:400},
    {username: 'Fai', photo:"", caption:'hallo', likes:20}
  ]
  server.route({
    method: 'GET',
    url:'/posts',
    handler: async (request,reply)=>{
    return(instagram)
    },
  });

  
server.listen({ port: 3000 },  (err, address)=> {
    if (err) {
      server.log.error(err)
      process.exit(1)
    }
  
  })