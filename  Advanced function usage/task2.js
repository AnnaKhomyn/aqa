function countTest (num) {
 console.log (num);
 if (num <= 0 ) 
    return; 
 countTest (num - 1);

}
countTest (11);