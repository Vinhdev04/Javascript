## Primitive Data Types trong JavaScript:

- Number -> typeof : number
- String -> typeof : string
- Boolean -> typeof : boolean
- Undefined -> typeof : undefined
- Null -> typeof : object

## Because: I'll explain why typeof null returns "object" in JavaScript, even though it might seem counterintuitive.

- Historical Reasons:

+ In JavaScript's early days, null was often used to represent an intentional absence of an object reference. It signified a variable that should point to an object but currently doesn't have a valid object assigned to it.
This usage pattern influenced the design choice of making typeof null return "object."
Technical Implementation (not as relevant in modern JavaScript):

+ In older JavaScript versions (where memory was limited), values were stored in 32 bits. The first 3 bits indicated the data type, while the remaining bits held the value itself.
null simply meant "nothing" and was represented by all zeros. This might have coincidentally aligned with the bit pattern for objects in the early implementation.
Important to Remember:

+ Despite typeof null being "object," null cannot have properties assigned to it, unlike true objects. It's a special case.
In modern JavaScript, the exact bit representation details are less important. The core concept is that typeof null is a historical quirk that has been preserved for backward compatibility.
