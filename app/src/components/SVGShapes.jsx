var CurvedTailArrow = React.createClass({ render: function () { return (<View style={styles.curvedTailArrow}> <View style={styles.curvedTailArrowTail} /> <View style={styles.curvedTailArrowTriangle} /> </View>) } }) curvedTailArrow: { backgroundColor: 'transparent', overflow: 'visible', width: 30, height: 25 }, curvedTailArrowTriangle: { backgroundColor: 'transparent', width: 0, height: 0, borderTopWidth: 9, borderTopColor: 'transparent', borderRightWidth: 9, borderRightColor: 'red', borderStyle: 'solid', transform: [{ rotate: '10deg' }], position: 'absolute', bottom: 9, right: 3, overflow: 'visible' }, curvedTailArrowTail: { backgroundColor: 'transparent', position: 'absolute', borderBottomColor: 'transparent', borderLeftColor: 'transparent', borderRightColor: 'transparent', borderBottomWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderTopWidth: 3, borderTopColor: 'red', borderStyle: 'solid', borderTopLeftRadius: 12, top: 1, left: 0, width: 20, height: 20, transform: [{ rotate: '45deg' }] };
var CutDiamond = React.createClass({ render: function () { return (<View style={styles.cutDiamond}> <View style={styles.cutDiamondTop} /> <View style={styles.cutDiamondBottom} /> </View>) } }) cutDiamond: { width: 100, height: 100, }, cutDiamondTop: { width: 100, height: 0, borderTopWidth: 0, borderTopColor: 'transparent', borderLeftColor: 'transparent', borderLeftWidth: 25, borderRightColor: 'transparent', borderRightWidth: 25, borderBottomColor: 'red', borderBottomWidth: 25, }, cutDiamondBottom: { width: 0, height: 0, borderTopWidth: 70, borderTopColor: 'red', borderLeftColor: 'transparent', borderLeftWidth: 50, borderRightColor: 'transparent', borderRightWidth: 50, borderBottomColor: 'transparent', borderBottomWidth: 0, };

export default { curvedTailArrow, CutDiamond };
