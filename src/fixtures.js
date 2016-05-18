exports.list = Array.apply(null, {length: 1000}).map((item, index) => index.toString(16));

exports.onClick = (e, msg = 'Hello world', index = null) => alert(msg + index);