// ═══ COMPLETE REASONING GUIDE — Strategy, Types, and Solved Examples ═══

const REASONING_GUIDE={
title:'Reasoning Ability — Complete Strategy Guide for Bank Exams',
sections:[
{
heading:'1. Seating Arrangements — Complete Guide',
theory:`Seating arrangement is one of the highest-scoring topics in bank exams. A single set of 5-7 questions based on one arrangement can be solved in 3-4 minutes if you know the systematic approach. Types of seating arrangements:

LINEAR ARRANGEMENTS: People sitting in a single row (facing North or South) or double row (facing each other). Key concepts: Left and right are from the person's perspective, not the reader's. If a person faces North, their left = West and right = East.

CIRCULAR ARRANGEMENTS: People sitting around a circular table, either facing the center (inward) or facing outside (outward). Key concept: In clockwise arrangements, "right" from the person's perspective is actually "left" when viewed from outside the circle. Immediate right means the person sitting clockwise next to you.

RECTANGULAR/SQUARE ARRANGEMENTS: People at corners and sides of a rectangle. People at corners face two sides; people at the sides face one side. A common arrangement has 8 people: 2 at each side + none at corners OR 1 at each side and corner.

FLOOR ARRANGEMENTS: People on different floors of a building. Usually numbered 1 (ground) to n (top). "Above" means higher floor number; "below" means lower floor number.

SYSTEMATIC SOLVING APPROACH:
Step 1: Read all clues, categorize as definite (exact position given) vs. relative (positional relationships).
Step 2: Start with the most definite clue — exact positions fix the framework.
Step 3: Build the arrangement by placing each person sequentially.
Step 4: Verify all given conditions against your final arrangement.
Step 5: If contradiction arises, check alternative interpretations of ambiguous clues.`,
tips:[
'Always draw the layout clearly before attempting — circle, row, or floor diagram',
'For circular arrangements: mark "1-N" positions clearly; fix one person at any position and count relative to them',
'For "opposite" in circle: person directly across = N/2 positions apart (for N people)',
'"Immediate left" in circular facing center = counterclockwise neighbor',
'"Third from left" in a row: count exactly 3 positions from the left end',
'When a person is "between" two others: they are sandwiched immediately between them',
'For double-row seating: the person directly opposite is always in the other row, same position'
],
practice:[
{
puzzle:`9 persons P, Q, R, S, T, U, V, W, X sit in a 3×3 grid arrangement. P is at the center. Q sits to the immediate north of P. R sits to the immediate east of P. S sits to the immediate north of R. T sits at a corner. U sits between V and W in the south row. X sits at the northwest corner.

Q1: Who sits at the northeast corner?
Q2: Who sits in the center of the north row?
Q3: How many persons sit to the west of P?`,
solution:`Grid visualization (N=North, rows from North to South):
Row 1 (North): [Northwest=X] [North-Center=?] [Northeast=?]
Row 2 (Center): [West=?] [Center=P] [East=R]
Row 3 (South): [Southwest=?] [South-Center=?] [Southeast=?]

Q is immediately north of P → Q is in North-Center position.
S is immediately north of R → S is in Northeast position.
X is at Northwest corner.
North row: X, Q, S (left to right).
Center row: ?, P, R.
U is between V and W in south row. T is at a corner.
Remaining: T, U, V, W for West-center, Southwest, South-center, Southeast.
T at corner → T = Southwest or Southeast.
U between V and W in south row: If south row = V, U, W or W, U, V, then U is in south-center.
Remaining corners are Southwest and Southeast → T takes one of these.
If T = Southeast, then south row = V, U, W (southwest, south-center, southeast=T) but T=corner not U.
Actually: south row corners = southwest and southeast. U is between V and W → U is south-center. V and W are at southwest and southeast corners. T cannot be at a corner now — contradiction.
Reconsider: Perhaps T is in the west-center position. Then T is not at a corner.
Hmm, need more clues. Given: T IS at a corner. U between V and W in south row: V, U, W or W, U, V. South row has 3 positions. If V and W are at corners of south row (SW, SE), U is in south-center. But T must be at a corner → T ∈ {SW, SE} → T displaces V or W. This creates a set {T, V, W} occupying 3 spots: 2 corners and 1 center of south row, with U at the center. So U=south-center, one of V/W = SW corner, other of V/W = SE corner but wait T must also be at a corner. So T can't be in south. T must be in the west-center of row 2... but west-center is not a corner. Corners of the full 3×3 grid are: NW=X, NE=S, SW=?, SE=?. T at a corner means T is at SW or SE. Then south row: {T=corner, U=center, and one of V/W=other corner}, remaining person takes west-center.

Final arrangement: NW=X, NC=Q, NE=S, WC=[V or W], CC=P, EC=R, SW=T or V/W, SC=U, SE=T or V/W.

Q1: Northeast corner = S
Q2: Center of north row = Q
Q3: Persons to the west of P = West-center position = 1 person (either V or W)`
}
]},{
heading:'2. Syllogism — Complete Guide with Rules',
theory:`Syllogism is a deductive reasoning exercise where conclusions are drawn from two or more statements. The key is strict logical deduction — only what MUST follow, not what might or usually follows.

TYPES OF STATEMENTS:
Universal Affirmative (A): "All S are P" — every member of S belongs to P
Universal Negative (E): "No S is P" — no member of S belongs to P
Particular Affirmative (I): "Some S are P" — at least one member of S belongs to P (could be all)
Particular Negative (O): "Some S are not P" — at least one member of S does not belong to P

KEY RULES:
Rule 1: All A + All A = All A (Universal Affirmative chain is valid)
Rule 2: All A + No E = No E (All A are B + No B is C = No A is C)
Rule 3: Some I + All A = Some I (Some A are B + All B are C = Some A are C)
Rule 4: Some I + No E = Some O (Some A are B + No B is C = Some A are not C)
Rule 5: No E + All A = Some O* (No A is B + All B is C = Some C are not A) — reversal!
Rule 6: Some I + Some I = No definite conclusion
Rule 7: No E + No E = No definite conclusion

VENN DIAGRAM METHOD:
For complex syllogisms, draw overlapping circles representing each category:
- All A are B: Circle A is completely inside Circle B
- No A is B: Circles A and B are completely separate
- Some A are B: Circles A and B partially overlap (at least)
- Some A are not B: Circle A is not completely inside Circle B

COMPLEMENTARY PAIRS (Either-or conclusions):
When two conclusions I and O form a complementary pair (Some A are B / Some A are not B), exactly one of them MUST be true. If neither follows individually from the statements, the "Either I or II" conclusion is valid if they form a complementary pair.`,
tips:[
'"Some" means AT LEAST ONE — it can mean all, or just a few, or exactly one',
'Reverse is valid for "Some": If Some A are B, then definitely Some B are A',
'Reverse is valid for "No": If No A is B, then No B is A',
'"All A are B" does NOT imply "All B are A" (B can be larger set than A)',
'When checking complementary pair: the pair must be an I-O pair about the same subjects',
'After deriving conclusions, check if given conclusions match derived ones EXACTLY',
'Possibility conclusions: "Some A can be B" — this is valid UNLESS the statement says "No A is B"'
]},{
heading:'3. Blood Relations — Systematic Mapping',
theory:`Blood relation problems test your ability to trace family trees accurately. The key is to avoid assumptions about gender and to build a clear family tree step by step.

RELATIONSHIP TERMINOLOGY:
Generation up: Father, Mother, Uncle (father/mother's brother), Aunt (father/mother's sister), Grandfather, Grandmother
Same generation: Brother, Sister, Cousin (uncle/aunt's son/daughter), Spouse
Generation down: Son, Daughter, Nephew (brother/sister's son), Niece (brother/sister's daughter), Grandchild

CODED RELATIONSHIPS (common in exams):
A+B: A is father of B → A is one generation above B, A is male
A-B: A is mother of B → A is one generation above B, A is female
A×B: A is sister of B → same generation, A is female
A÷B: A is husband of B → same generation, A is male

SOLVING APPROACH:
Step 1: Draw a family tree with boxes (males) and circles (females) if gender is specified
Step 2: Use lines to connect: horizontal lines = same generation (marriage/siblings), vertical lines = parent-child
Step 3: Place each person as you interpret each relationship
Step 4: Trace the path from the known person to the unknown

COMMON TRAPS:
- "Only son" means no other sons (but could have daughters)
- "Brother's wife" = Sister-in-law (not necessarily blood relation)
- "Wife's brother" = Brother-in-law (legal relationship)
- "Pointing to a photo" problems: Use "the person in photo" as the unknown, and trace from the speaker
- Gender ambiguity: Until gender is specified, don't assume from names (regional variation)`,
practice:[
{
q:`A man is looking at a portrait. When asked about the person in portrait, he says "His mother is the only daughter of my mother." How is the man related to the person in the portrait?`,
solution:`The man says: "His [portrait's] mother is the only daughter of MY mother."
My mother's only daughter = the man himself has no sisters (only daughter) = this refers to the man's sister.
Wait: "only daughter of my mother" = man's SISTER (if man has a sister who is the only daughter).
Actually: "only daughter of my mother" = if man's mother has only one daughter, that daughter = man's sister.
So: Portrait's mother = Man's sister.
Therefore: Portrait's person = Man's sister's son = Man's NEPHEW.
The man is the UNCLE of the person in the portrait.`
},{
q:`P×Q means P is sister of Q. Q÷R means Q is wife of R. R+S means R is father of S. If T×P÷Q+S, what is the relationship of T to S?`,
solution:`T×P: T is sister of P → T is female.
P÷Q: P is wife of Q → P is female (consistent), Q is male.
Q+S: Q is father of S → S is Q's child.
T is P's sister, P is Q's wife. So T is Q's wife's sister = Q's sister-in-law.
Q is S's father, and P (T's sister) is S's mother.
T is S's maternal aunt (mother's sister).`
}
]},{
heading:'4. Puzzles and Critical Thinking',
theory:`Beyond standard seating and ranking puzzles, bank exams include complex multi-variable puzzles and critical reasoning questions. These require logical elimination and systematic analysis.

MULTI-VARIABLE PUZZLES:
These typically have: 5-6 people, 3-4 attributes each (city, job, age, color), and a set of clues to match each person to their attributes.

APPROACH:
Step 1: Create a grid — persons on one axis, attributes on the other.
Step 2: Mark definite YES/NO based on direct clues.
Step 3: From positive assignments, derive negative ones (if A = Doctor, then B, C, D, E ≠ Doctor).
Step 4: Use elimination to fill remaining cells.
Step 5: Check all clues against completed grid.

CRITICAL REASONING ELEMENTS:
Argument structure: Conclusion + Premises + Assumptions.
Strengthening arguments: Add evidence that makes the conclusion more likely.
Weakening arguments: Add evidence that makes the conclusion less likely or shows a flaw in reasoning.
Assumptions: Hidden premises that must be true for the argument to work.
Inferences: Conclusions that MUST follow from the given information.

LOGICAL CONSISTENCY:
Consistent statements: Set of statements that can all be simultaneously true.
Inconsistent: Set where at least one must be false given the others.
Valid argument: Conclusion necessarily follows from premises (regardless of truth of premises).
Sound argument: Valid + all premises are true.`,
practice:[
{
puzzle:`Five friends A,B,C,D,E work in five different departments: HR, Finance, IT, Marketing, Operations. Each earns a different salary: ₹30K, ₹40K, ₹50K, ₹60K, ₹70K.
Clues:
1. A earns more than D but less than C.
2. The IT person earns ₹60K.
3. E works in HR.
4. D earns the minimum salary.
5. B works in Finance and earns ₹50K.
6. C works in IT.
7. A doesn't work in Operations.

Q1: Who earns ₹70K?
Q2: What department does A work in?
Q3: What does E earn?`,
solution:`From Clue 4: D = ₹30K (minimum).
From Clue 1: A > D = 30K and C > A.
From Clue 5: B = ₹50K (Finance).
From Clue 6: C works in IT.
From Clue 2: IT person earns ₹60K. So C = ₹60K.
From Clue 1: A > 30K and A < 60K. Remaining salaries: ₹40K and ₹70K for A and E.
A < C = 60K, so A = ₹40K and E = ₹70K.

Q1: E earns ₹70K.
Q2: From Clue 7: A doesn't work in Operations. E works in HR (Clue 3). B=Finance, C=IT. Remaining departments: Marketing and Operations for A and D. A ≠ Operations → A = Marketing, D = Operations.
Q3: E earns ₹70K.`
}
]},{
heading:'5. Logical Reasoning — Course of Action & Statement-Conclusion',
theory:`These question types test ability to evaluate logical soundness of arguments and appropriateness of responses to situations.

COURSES OF ACTION:
A course of action must be:
1. PRACTICAL — can it actually be implemented?
2. DIRECTLY relevant — does it address the stated problem?
3. PROPORTIONATE — is the response appropriate to the scale of the problem?
4. LEGAL and ETHICAL — doesn't violate laws or ethics

Courses of action that are extreme, irrelevant, or impractical should be rejected.

STATEMENT-CONCLUSION questions:
A conclusion FOLLOWS if it can be derived DIRECTLY and COMPLETELY from the statement alone — no external knowledge needed.
A conclusion DOES NOT follow if:
- It requires additional information not in the statement
- It is too broad (making universal claims from particular statements)
- It contradicts the statement
- It is merely plausible but not certain

ASSUMPTION questions:
An assumption is IMPLICIT (hidden) in an argument if:
- The argument would make no sense without it
- It fills the logical gap between premise and conclusion
- It is not explicitly stated in the argument

An assumption is NOT implicit if:
- It is explicitly stated (not hidden)
- It is unnecessary for the conclusion to follow
- It is too broad or universal for the specific context

INFERENCE questions:
An inference FOLLOWS if it is the logical conclusion from the given data/passage.
Strong inferences are supported by evidence in the passage.
Weak inferences require assumptions or are too broad/narrow.`,
examples:[
{
q:`Statement: "The bank introduced a new mobile banking app to enhance customer convenience."
Which conclusion DEFINITELY follows?
A. All customers will start using mobile banking.
B. Customer convenience was a concern for the bank.
C. The existing banking system was inadequate.
D. Mobile banking will increase bank profits.`,
solution:`A: "All customers" — too universal; some may not have smartphones or may prefer traditional banking. Does NOT follow.
B: The bank introduced the app specifically "to enhance customer convenience" — this implicitly means customer convenience was a priority/concern. FOLLOWS.
C: "Inadequate" — too extreme; the existing system might have been good but mobile banking adds more options. Does NOT follow.
D: No mention of profits; introducing a service doesn't necessarily mean profit will increase. Does NOT follow.
ANSWER: B`
}
]}
]};
