// Set socket off the global
// This is so require plays nice
// The file is actually served from the server

define([], function(){
  return io.connect(); // return the connected global
});