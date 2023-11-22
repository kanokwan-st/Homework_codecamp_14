const styles = new Array('Jazz', 'Blues');
styles.push('Rock-n-Roll');
styles[1] = 'Classic';
delete styles[0];
console.log(styles.length);