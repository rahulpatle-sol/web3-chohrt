function bytesToAscii(byteArray) {
    return byteArray.map(byte => String.fromCharCode(byte)).join('');
  }
  
  // Example usage:
  const bytes = [72, 101, 108, 108, 111]; 
  const bytes2=[62, 101, 108, 108, 111]; // Example with a different byte array`]
  const asciiString = bytesToAscii(bytes, bytes2);
  console.log(asciiString); // Output: "Hello"
  