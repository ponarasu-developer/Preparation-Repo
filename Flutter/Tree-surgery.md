Tree Surgery in flutter

----Flutter can move UI parts around without destroying them, preserving state and layout.

Each Element holds:

✅ State (StatefulWidget) --  the current state of the widget the info of it
✅ RenderObject (layout + paint info)

❌ Without reuse: -- State (e.g., scroll position, input text) --- Layout cache
With Reuse -- we have the layout cache and we can move with same memory

1.2 GlobalKey = Identity Across Tree
What GlobalKey does:
Gives widget a global identity
Stored in a global hash table

 Tree Surgery in Action
    Before:
    Column A
     └── Widget (GlobalKey)
    After:
    Column B    
     └── Widget (same GlobalKey)
What Flutter does:

❌ Not:

Destroy + recreate

✅ Instead:

Detach from A → Attach to B

👉 Same element reused