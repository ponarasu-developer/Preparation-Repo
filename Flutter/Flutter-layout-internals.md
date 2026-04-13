 Flutter Layout...

1.Parent give constraints.
2.Child returns size.
3.Parent sets position.

Child never know it's position --- as same as Parent doesn't decide child size (only limits the size)

EG-------------------------------------------------------- 
Parent → Child:
“You can be between 100–200px width and 50–100px height”
Child decides:
“Okay, I’ll take 150px × 80px”
Child → Parent:
Returns that size
Parent decides position:
“Cool, I’ll place you at (x:10, y:20)”

-------------------------------------------------------------

UI rendering problems with other framework 

1. Recalculate the UI multiple times
2. Other framework use FIXED POINT ITERATION - (keep calculating the values again and again until nothing changes)
E,g - x = (x + 10) / 2
we can start with 0 and keep guessing until we got the answer.
UI example----
Problem:
Parent size depends on child
Child size depends on parent

👉 Circular dependency

ISSUES WITH FIXED POINT ITERATION  - TIME COMPLEXITY - O(N²) or worse
1.Multiple layout passes
2.Repeated recalculation
3.Poor performance


HOW FLUTTER OVERCOME THIS -- FLUTTER -- No circular dependency allowed
Flutter Layout Rule:
    Parent → gives constraints only
    Child → returns size only
    Parent → decides position later

E.g 

Container(
  width: 200,
  child: Text("Hello"),
)
here "container give max width to child widget "text" as 200.so "text" widget has no chance to have more then 200, after it decide the size it return it to parent "container" , then "container" calculate it position when needed"


In flutter A widget become DIRTY when (State changes) or (Layout might need update)


FLUTTER CONSTRAINS TYPES
1. Tight Constraints ---- E.g -- SizedBox(width: 100, height: 100) (only one possible size , child can't able to change size)
 one possible size || Child cannot change size

2. Loose Constraints --- E.g --- Container(width: double.infinity) Child has flexibility 


✅ Good Practices
Use const widgets where possible
Avoid unnecessary rebuilds
Keep widget tree clean and modular
Use proper constraints (Expanded, SizedBox, etc.)

❌ Bad Practices
Deep unnecessary nesting
Rebuilding entire tree on small change
Using layout-heavy widgets improperly



Sublinear Widget Building-----Flutter does NOT rebuild the whole UI—only the parts that changed.
