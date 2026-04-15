Keys - Keys are the once who preserve the state when widgets moves around the element tree.
Keys are not needed in stateless widgets
\\\\\\\\\\

A key is an object that tells flutter this is an widget with same functionality and value just the position changes so dont 
destroy this and rebuild just reuse it.

Without keys:
Flutter matches widgets by:

Type (runtimeType)
Position in the tree


With keys:
Flutter matches widgets by:

Key identity (priority)
Then type/position

E.g -- like the example in the previous trees MD if we going to reorder a list view --- 
with out key after reordering flutter compare the widget with type in element tree , but if we are using the key here flutter gives priority to the key and use it in optimized way.



Types of Key's in flutter --- 
1. Local Key's   --- Used within a single widget subtree.
2. ObjectKey     --- Uses object identity (== comparison) ,when to use | already have a unique object.
3. Unique Key    --- Always unique (never equal to anything)
Use when:

You want to force rebuild
Reset widget state intentionally

⚠️ Be careful: destroys state every rebuild

4. Global Keys    --- give access to widget state , context and move widgets across the elements tree while preserving state.
⚠️ Why GlobalKeys are risky
-Expensive (affects performance)
-Breaks tree optimization
-Should be used sparingly




Avoid unnecessary keys:

Static UI
No reordering
No state issues

👉 Overusing keys = performance overhead




Local key is just a simple key used within a same parent , scope is among only with the sub- tree , light weight and no performance overhead.

Global Key -- A GlobalKey is unique across the entire widget tree. can access through-out the app. heavy use in --- Forms, Scaffold, navigation. 


Classical Bug - 

// Stateful widgets in a list WITHOUT keys
// This is the classic bug:

// You have two ColoredBoxes with internal color state
// [RedBox, BlueBox]
// You remove RedBox → list becomes [BlueBox]
// BUT Flutter sees: position 0 still has a ColoredBox
// So it REUSES the RedBox element with BlueBox widget
// Result: BlueBox shows RED color — wrong state!

// Fix:
ColoredBox(key: ValueKey(color), color: color)
// Now Flutter matches by key identity, not position