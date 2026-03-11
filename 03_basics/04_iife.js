// Immediately Invoked Function Expression (IIFE)


(function chai() {
    // Named IIFE
    console.log(`DB Connected`);
}) (); // DB Connected

( (name) => {
    // simple IIFE 
    console.log(`DB Connected Two ${name}`);
} )  ('meet')