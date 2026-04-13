What Happens on setState()

////setState(() {})//////////
👉 Flutter:
1.Marks that element as dirty
2.Adds it to a dirty list
🚀 Optimization:----Instead of rebuilding everything:

👉 Flutter jumps directly to dirty elements 

Sublinear  --- Once an element is clean, it won’t become dirty again in the same frame
-Only dirty nodes are rebuilt
-Clean nodes are skipped


Widget Build:

Only rebuild what changed (dirty elements)

Element Tree:

Keeps structure + state

Reconciliation:

Compare only siblings, not whole tree

Performance:

O(N) or better → very fast


In flutter it rebuild the UI widget tree, if there is any change in the state while tregaring the setstate(()), if it not in the dirty list it reuse the same UI which is an optimized way.

EG - [A,B,C] if C is changed to D 
Flutter reuse "A,B" and destroy C and rebuild D.

Role of Key's in Flutter widget tree 
Eg - without key , if [A,B] change to [B,A]---flutter may destroy both and rebuild again.
if it has key flutter smartly reuse the Widget ui.


Flutter Optimized example--  In Flutter, data is pushed down, not searched upward
🧠 Scenario

You want to access theme color deep in the widget tree.

Tree example  - 
App
 └── Screen
      └── Section
           └── Card
                └── Button
Inside button we give like - Theme.of(context).primaryColor (to access the colour from the theme)

Naive Approach (Other frameworks thinking)
Button does:

<!-- Ask parent → “Do you have theme?”
Parent says no → go up
Ask next parent
Repeat until found -->
Button → Card → Section → Screen → App  ---- Time complexity  O(N2)


Flutter Solution: InheritedWidget + Hash Table

Flutter says:

❌ “Don’t walk up the tree repeatedly”
✅ “Cache the answer at each level”

Each Element stores a map like:
{
  Theme → ThemeData,
  MediaQuery → MediaQueryData,
  ...
}

Step 1: Theme is introduced  --- Flutter creates an InheritedWidget (Theme)

At App level:

MaterialApp(
  theme: ThemeData(...),
)

Step 2: Hash table propagation

Instead of children searching upward:

👉 Flutter pushes theme down

So internally (It pushes down the theme data and all other essential data downwards each time when a node in a tree got created)

Screen → has Theme reference
Section → has Theme reference
Card → has Theme reference
Button → has Theme reference

Step 3: Button access

Direct LookUp -- Button.element.inheritedMap[Theme]

🔥 What happens internally
Theme is stored once
Propagated to all elements
MyButton gets it instantly

👉 No parent walking