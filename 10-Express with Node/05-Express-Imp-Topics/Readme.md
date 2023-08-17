
## Use of __dirname

Assuming the same directory structure:

```
myApp/
  routes/
    subfolder/
      index.js
```

You can reference the `index.js` file like this:

```javascript
const express = require('express');

const app = express();

const indexPath = __dirname + '/routes/subfolder/index.js';

app.get('/', (req, res) => {
  // Your code here
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

However, please note that manually concatenating paths using string manipulation can lead to issues related to inconsistent directory separators between different operating systems (such as `/` for Unix-based systems and `\` for Windows). This is why using `path.join()` is recommended as it handles these platform-specific details for you.

---
