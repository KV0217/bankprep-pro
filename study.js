const STUDY={
quantitative_aptitude:[
{title:'Percentage',
intro:'Percentage means "per hundred". It is a ratio with denominator 100. Percentages are fundamental to profit/loss, SI/CI, data interpretation, and almost every quantitative topic.',
formulas:['x% of y = xy/100','% change = (New - Old)/Old × 100','If A is x% more than B, then B is x/(100+x)×100% less than A','If price increases by x%, reduce consumption by x/(100+x)×100% to keep expenditure same','Successive % changes: a% then b% = (a+b+ab/100)%','To find original: Original = Final × 100/(100 ± change%)'],
examples:[
{q:'A number is 20% more than another. If the smaller number is 150, find the larger.',steps:['Let smaller = 150','Larger = 150 × (100+20)/100 = 150 × 1.2'],ans:'180'},
{q:'Price of a commodity rises by 25%. By what % must a family reduce consumption to maintain same expenditure?',steps:['Reduction = 25/(100+25) × 100 = 25/125 × 100'],ans:'20%'},
{q:'In an election, 60% voted. Of these, 75% voted for A. If total voters are 8000, votes for A?',steps:['Voters who voted = 60% of 8000 = 4800','Votes for A = 75% of 4800 = 3600'],ans:'3600'}
],
tips:['Learn fraction-percentage equivalents: 1/4=25%, 1/3=33.33%, 1/8=12.5%','For successive changes, use formula directly instead of calculating step by step','In elections, always work with total votes as base','Percentage always relates to a BASE — identify the base first'],
mistakes:['Confusing % of A vs % more than A','Wrong base for calculation (using new value instead of original)','Not reading "of" vs "more than" carefully']},
{title:'Profit & Loss',
intro:'Profit/Loss measures the financial outcome of a transaction. Cost Price (CP) is what you pay; Selling Price (SP) is what you receive. These concepts are heavily tested in all bank exams.',
formulas:['Profit = SP - CP (when SP > CP)','Loss = CP - SP (when CP > SP)','Profit% = (Profit/CP) × 100','Loss% = (Loss/CP) × 100','SP = CP × (100 + P%)/100','CP = SP × 100/(100 + P%)','Mark-up Price (MP): Discount = MP - SP, Discount% = (Discount/MP)×100','Selling price after discount = MP × (1 - d/100)','Successive discounts: d1 and d2 → Single equivalent = (d1+d2 - d1×d2/100)%'],
examples:[
{q:'A trader marks goods 40% above cost and allows 20% discount. Find profit%.',steps:['Let CP = 100','MP = 140 (40% above)','SP = 140 × 0.8 = 112','Profit = 112 - 100 = 12'],ans:'12%'},
{q:'A shopkeeper uses 900g weight instead of 1kg. What is his actual profit% if he sells at cost price?',steps:['He gives 900g but charges for 1000g','Profit on 900g = 100g','Profit% = 100/900 × 100'],ans:'11.11%'},
{q:'Two items sold at Rs.990 each. One at 10% profit and one at 10% loss. Overall?',steps:['CP1 = 990×100/110 = 900','CP2 = 990×100/90 = 1100','Total CP = 2000, Total SP = 1980'],ans:'Loss of Rs.20, Loss% = 1%'}
],
tips:['When same SP, same %, always loss. Formula: Loss% = (common%)²/100','Marked price problem: work from CP=100','Dishonest trader: profit% = error/(true measure-error) × 100','Successive discounts: single equivalent = a+b-ab/100'],
mistakes:['Calculating profit% on SP instead of CP','Forgetting that successive discounts are not additive','Not reading whether discount is on MP or CP']},
{title:'Simple & Compound Interest',
intro:'Simple Interest (SI) is calculated on the original principal only. Compound Interest (CI) is calculated on principal plus accumulated interest. These topics appear in every bank exam.',
formulas:['SI = PRT/100','Amount (SI) = P + SI = P(1 + RT/100)','CI = P[(1+R/100)^n - 1]','Amount (CI) = P(1+R/100)^n','CI-SI for 2 years = P(R/100)²','CI-SI for 3 years = P(R/100)²(3+R/100)','Half-yearly: A = P(1+R/200)^(2n)','Quarterly: A = P(1+R/400)^(4n)','If CI of 2 years = A and 3 years = B, then R% = (B-A)/A × 100'],
examples:[
{q:'A sum doubles itself in 10 years at SI. Find rate%.',steps:['Let P=100, Amount=200, SI=100','SI = PRT/100 → 100 = 100×R×10/100','100 = 10R → R = 10'],ans:'10% per annum'},
{q:'Find CI on Rs.12000 at 10% for 2 years, compounded annually.',steps:['After year 1: 12000×1.1 = 13200','After year 2: 13200×1.1 = 14520','CI = 14520 - 12000 = 2520','Or directly: CI = 12000[(1.1)²-1] = 12000×0.21'],ans:'Rs.2520'},
{q:'Difference between CI and SI on Rs.5000 for 3 years at 8%.',steps:['Diff = P(R/100)²(3+R/100)','= 5000×(0.08)²×(3.08)','= 5000×0.0064×3.08 = 98.56'],ans:'Rs.98.56'}
],
tips:['For sum doubling/tripling at SI: R×T = 100×(multiplier-1)','Rule of 72: Time to double at CI ≈ 72/R%','CI-SI difference is always positive (CI > SI for same P,R,T)','Half-yearly compounding > yearly compounding at same nominal rate'],
mistakes:['Using SI formula for CI questions','Forgetting to account for half-yearly in quarterly questions','Not applying the compound formula correctly for fractional time']},
{title:'Time & Work',
intro:'Time and Work problems involve calculating how long it takes one or more workers/machines to complete a job. The key concept is work rate (work done per unit time).',
formulas:['Work done = Rate × Time','If A completes work in n days, A\'s 1-day work = 1/n','A and B together: 1/T = 1/a + 1/b → T = ab/(a+b)','Efficiency ratio = inverse of time ratio','MDH = constant (Men × Days × Hours)','Wages distributed in ratio of work done (efficiency × time)','If A is x times efficient as B, A takes work in 1/x the time'],
examples:[
{q:'A takes 12 days, B takes 18 days. Together, A and B complete work in?',steps:['Combined rate = 1/12 + 1/18 = 3/36 + 2/36 = 5/36','Time = 36/5'],ans:'7.2 days'},
{q:'15 men finish a piece of work in 12 days. In how many days will 9 men finish 3/4 of that work?',steps:['Total work = 15×12 = 180 man-days','Work = 3/4 × 180 = 135 man-days','Days = 135/9 = 15'],ans:'15 days'},
{q:'A and B together complete work in 12 days. B and C in 20 days. A and C in 15 days. Find C alone.',steps:['2(A+B+C) = 1/12+1/20+1/15 = 5/60+3/60+4/60 = 12/60 = 1/5','A+B+C = 1/10','C alone = 1/10 - 1/12 = 2/60 = 1/30'],ans:'30 days'}
],
tips:['Always convert to "1-day work" format first','For pipes: filling is positive, draining is negative','Wages ∝ efficiency × days worked','Shortcut for two workers: T = ab/(a+b)'],
mistakes:['Adding times instead of rates','Forgetting that B alone = (A+B) combined - A alone','Confusing work done with time taken']},
{title:'Speed, Distance & Time',
intro:'Speed-Distance-Time (SDT) is one of the most important topics covering trains, boats, and relative motion. Master the unit conversions and relative speed concepts.',
formulas:['Distance = Speed × Time','Speed = Distance/Time, Time = Distance/Speed','1 km/h = 5/18 m/s, 1 m/s = 18/5 km/h','Average Speed (equal distances) = 2ab/(a+b)','Average Speed (equal times) = (a+b)/2','Relative Speed: Same direction = |S1-S2|, Opposite = S1+S2','Train crossing pole: T = Length of train/Speed','Train crossing platform: T = (Length of train + Length of platform)/Speed','Boat: Downstream speed = B+S, Upstream = B-S, B=(D+U)/2, S=(D-U)/2'],
examples:[
{q:'A train 200m long passes a pole in 20 sec. Speed in km/h?',steps:['Speed = 200/20 = 10 m/s','Speed = 10 × 18/5 = 36 km/h'],ans:'36 km/h'},
{q:'Two trains of 150m and 100m run at 80 and 40 km/h in same direction. Time to cross?',steps:['Relative speed = 80-40 = 40 km/h = 40×5/18 = 100/9 m/s','Total distance = 150+100 = 250m','Time = 250/(100/9) = 250×9/100 = 22.5 sec'],ans:'22.5 seconds'},
{q:'A boat goes 24 km downstream in 2 hrs and 16 km upstream in 4 hrs. Speed of boat?',steps:['Downstream speed = 24/2 = 12 km/h','Upstream speed = 16/4 = 4 km/h','Speed of boat = (12+4)/2 = 8 km/h'],ans:'8 km/h'}
],
tips:['Convert units first — km/h to m/s or vice versa','For average speed: use harmonic mean for equal distances','Train questions: always add lengths when crossing something','Boat: current adds downstream, subtracts upstream'],
mistakes:['Using arithmetic mean instead of harmonic mean for average speed','Forgetting to add lengths in train crossing problems','Wrong relative speed direction']},
{title:'Ratio, Proportion & Partnership',
intro:'Ratio compares two quantities. Proportion is equality of two ratios. Partnership applies ratio concepts to business profit sharing based on capital and time.',
formulas:['a:b = a/b. Equivalent ratios: multiply/divide both by same number','Compound ratio of a:b and c:d = ac:bd','Duplicate ratio of a:b = a²:b²','If A:B = m:n and B:C = p:q, then A:B:C = mp:np:nq','Partnership: Profit ∝ Capital × Time','Simple Partnership: same time, profit ∝ capital','Compound Partnership: different time, profit ∝ capital × time'],
examples:[
{q:'A:B=3:5, B:C=4:7. Find A:B:C.',steps:['A:B=3:5, B:C=4:7','Make B equal: LCM of 5,4=20','A:B=12:20, B:C=20:35','A:B:C = 12:20:35'],ans:'12:20:35'},
{q:'A invests Rs.50000 for 12 months, B Rs.40000 for 8 months. Share profit Rs.27000.',steps:['A\'s share = 50000×12 = 600000','B\'s share = 40000×8 = 320000','Ratio = 600:320 = 15:8','A\'s profit = 15/23 × 27000 = 17609'],ans:'A: Rs.17609, B: Rs.9391'}
],
tips:['To find A:B:C from A:B and B:C, make B\'s value equal (LCM method)','Partnership: if no time given, assume equal time','Proportion: mean product = extreme product (a/b = c/d → ad = bc)'],
mistakes:['Not equalizing the common term when combining ratios','Confusing simple and compound partnership','Using wrong ratio in profit sharing']},
{title:'Number Series & Sequences',
intro:'Number series questions require identifying the pattern and finding the missing/wrong term. Common patterns: arithmetic, geometric, Fibonacci, square/cube, mixed operations.',
formulas:['AP: nth term = a + (n-1)d, Sum = n/2(2a+(n-1)d)','GP: nth term = ar^(n-1), Sum = a(r^n-1)/(r-1)','Squares: 1,4,9,16,25,36,49,64,81,100','Cubes: 1,8,27,64,125,216,343,512','Fibonacci: each term = sum of previous two','Primes: 2,3,5,7,11,13,17,19,23,29,31,37'],
examples:[
{q:'Find next: 2, 6, 12, 20, 30, __',steps:['Differences: 4,6,8,10 (increasing by 2)','Next difference = 12','Next term = 30+12 = 42'],ans:'42'},
{q:'Find wrong term: 1, 3, 7, 13, 21, 31, 43, 57',steps:['Differences: 2,4,6,8,10,12,14 (correct AP pattern)','All terms check out — No error. Let\'s check: 1+2=3,3+4=7,7+6=13... All correct'],ans:'No wrong term — series is correct'}
],
tips:['Check differences first (1st, 2nd, 3rd level differences)','Look for squares/cubes + constant pattern','If pattern unclear, try ratio of consecutive terms','In wrong number series, find the term that breaks the established pattern'],
mistakes:['Not checking 2nd or 3rd order differences','Missing alternating series (two interleaved series)','Not verifying all terms with identified pattern']},
{title:'Data Interpretation',
intro:'DI involves reading and analyzing data from tables, bar charts, line graphs, pie charts, or mixed formats. It has the highest weightage in bank exams (15-20 marks in Mains).',
formulas:['% of total = (part/total) × 100','Growth rate = (New-Old)/Old × 100','Ratio = A/B (simplify for comparison)','Average = Sum/Count','To compare fractions: cross-multiply or convert to decimals'],
examples:[
{q:'A company\'s revenue: 2020=Rs.120Cr, 2021=Rs.150Cr, 2022=Rs.180Cr. Growth from 2020-2022?',steps:['Overall growth = (180-120)/120 × 100 = 60/120 × 100'],ans:'50% growth'},
{q:'In a pie chart: A=30%, B=25%, C=20%, D=15%, E=10%. If total=Rs.80000, find D\'s value.',steps:['D = 15% of 80000 = 15/100 × 80000 = 12000'],ans:'Rs.12,000'}
],
tips:['Approximate when precision not needed (saves time)','For table DI, scan all rows/columns before solving','Convert bar chart data to table for easier comparison','Always double-check which year/category the question asks about'],
mistakes:['Rushing and misreading data from charts','Calculating wrong growth rate (using new instead of old as base)','Not reading the note about units (lakhs vs crores vs units)']},
],

reasoning:[
{title:'Syllogism',
intro:'Syllogism tests logical deduction from given statements. Using Venn diagrams is the most reliable approach. Focus on: All, Some, No, Some-not relationships.',
formulas:['All A→B: All As are inside B circle','Some A→B: Partial overlap of A and B','No A→B: A and B circles don\'t overlap','All A→B + All B→C → All A→C (valid)','Some A→B + All B→C → Some A→C (valid)','No A→B + All C→B → No C→A (valid)','Some + Some = No definite conclusion','No + No = No definite conclusion','Possibility cases: if "No A is B" is true, can "some A are B" be possibly true? NO','If "Some A are B", then "Some B are A" is definitely true'],
examples:[
{q:'All dogs are cats. Some cats are birds. Conclusion: I. Some dogs are birds. II. Some birds are dogs.',steps:['Draw: Dogs inside Cats. Some cats overlap with Birds.','Dogs may or may not overlap with Birds.','Neither I nor II is definite.'],ans:'Neither conclusion follows'},
{q:'No teacher is student. Some professionals are students. Conclusion: Some professionals are not teachers.',steps:['No teacher is student → Teachers and Students don\'t overlap','Some professionals are students → overlap of Professionals and Students','Those professional-students are NOT teachers.'],ans:'Conclusion follows'}
],
tips:['Draw Venn diagrams for complex problems','Remember: "Some" means AT LEAST ONE (could be all)','In complementary pair questions: exactly one of the two follows','"Either or" conclusions: if neither is individually true, check if they form a complementary pair'],
mistakes:['Assuming "some" means "only some, not all"','Drawing wrong Venn diagram for "No" statements','Forgetting reverse of "Some A are B" is "Some B are A"']},
{title:'Seating Arrangement & Puzzles',
intro:'One of the highest-scoring topics. Usually 3-5 Qs per set. Types: Linear (single/double row), Circular, Rectangular. Use systematic elimination.',
formulas:['Circular arrangement: (n-1)! arrangements','Linear arrangement: n! arrangements','For facing center/outside: direction matters in circular','Double row: track which direction each person faces'],
examples:[
{q:'8 people sit in circle. A is 3rd to right of B. C sits opposite to A. D is immediate right of C.',steps:['Fix B\'s position. Count 3 right → A\'s position.','Opposite in circle of 8 = 4 seats away from A = C\'s position.','D is immediately right of C.'],ans:'Solved systematically by placing each person'},
],
tips:['Start with the most definite clue (exact position)','Mark clockwise/counterclockwise clearly for circular','For double row, draw two separate rows with arrows for direction','Process of elimination: use "not adjacent to" to narrow down'],
mistakes:['Confusing left/right when facing inward vs outward in circular','Not tracking all constraints simultaneously','Assuming position without checking all conditions']},
{title:'Inequalities',
intro:'Coded inequalities use symbols like @,#,$ instead of >,<,=. First decode the symbols, then evaluate conclusions. Direction of inequalities is key.',
formulas:['A>B>C → A>C (transitive)','A>B, B=C → A>C','A>B, B<C → A vs C cannot be determined','Breaking chain: any reversal or unknown breaks definite conclusion','≥: means greater than OR equal; ≤: less than OR equal'],
examples:[
{q:'P>Q≥R>S. Conclusions: I. P>S. II. Q>S.',steps:['I: P>Q≥R>S → P>S ✓','II: Q≥R>S → Q>S ✓','Both follow'],ans:'Both I and II follow'},
{q:'A>B, C<B, D=C. Is A>D?',steps:['B>C=D (from C<B and D=C)','A>B>D','Yes, A>D'],ans:'Yes, A>D definitely'}
],
tips:['Always decode symbols first in coded inequalities','For combined statements: chain the inequalities','If at any point there\'s a reversal or equality that prevents comparison, say "cannot be determined"'],
mistakes:['Ignoring ≥ vs > distinction (equal case matters)','Incorrect chaining of multiple inequalities','Assuming direction when chain is broken']},
{title:'Coding-Decoding',
intro:'Letters or words are coded using a systematic pattern. The key is identifying the pattern from the example given. Most common patterns: shift, reversal, numerical.',
formulas:['Alphabet positions: A=1, B=2,...Z=26','Opposite letter: A-Z, B-Y, C-X (sum=27)','+1 shift: A→B, Z→A (circular)','Number coding: word sum, or each letter\'s position'],
examples:[
{q:'If MASTER is coded as OCUVGT, find pattern.',steps:['M→O: +2, A→C: +2, S→U: +2, T→V: +2, E→G: +2, R→T: +2','Pattern: each letter +2'],ans:'Every letter shifted by +2'},
{q:'If CLOUD=59, RAIN=50, find FOG=?',steps:['C=3,L=12,O=15,U=21,D=4 → sum=55 (not 59). Try C+L+O+U+D=55. Hmm.','R=18,A=1,I=9,N=14=42. Not 50 either.','Perhaps positional: C=3,L=12,O=15,U=21,D=4 → maybe multiplied?'],ans:'Pattern requires more examples to decode fully — show working'}
],
tips:['Check: shift (+/-n), reversal (A→Z), mirror (A=Z,B=Y), number sum, positional multiplication','Always verify pattern with all letters of the given word','In number coding, try: sum of positions, sum of reverse positions, product'],
mistakes:['Checking only first few letters and assuming rest','Missing the possibility of different shifts for odd/even positions','Not considering possibility of positional values vs shifted values']},
{title:'Blood Relations',
intro:'Blood relation questions map family connections. The trick is to avoid assumptions about gender and build a family tree systematically.',
formulas:['Paternal side: Father\'s sister=Aunt, Father\'s brother=Uncle','Maternal side: Mother\'s sister=Maternal Aunt, Mother\'s brother=Uncle','Spouse relations: Brother\'s wife=Sister-in-law, Wife\'s brother=Brother-in-law','Generational: above=parent/grandparent; below=child/grandchild'],
examples:[
{q:'"Pointing to a girl, Ajay says \'she is the daughter of my grandfather\'s only son\'"',steps:['Grandfather\'s only son = Ajay\'s father','Daughter of Ajay\'s father = Ajay\'s sister'],ans:'The girl is Ajay\'s sister'},
{q:'A+B means A is father of B. A-B means A is mother of B. A×B means A is brother of B. If P+Q-R, find R\'s relation to P.',steps:['P+Q: P is father of Q','Q-R: Q is mother of R','So P is grandfather of R'],ans:'R is P\'s grandchild'}
],
tips:['Draw a family tree for every question','Use boxes for males, circles for females when gender is known','"Only son" means that person is the sole son','Pointing-to questions: trace the relationship chain step by step'],
mistakes:['Assuming gender without confirmation','Confusing paternal and maternal relatives','Skipping intermediate steps in chain relationships']},
],

english:[
{title:'Reading Comprehension',
intro:'RC passages in bank exams are typically 500-600 words with 5-10 questions. Speed reading with active comprehension is essential. Focus on main idea, inference, vocabulary in context.',
formulas:['Main Idea: Usually in opening or closing sentence of first paragraph','Tone: identify author\'s attitude (positive/negative/neutral/critical/satirical)','Inference: What MUST be true based on passage? Not what CAN be true','Vocabulary in context: Replace word with options; which fits best in that sentence?','True/False/Cannot Say: Only mark True if explicitly stated; Cannot Say if not enough info'],
examples:[
{q:'How to approach a RC passage?',steps:['Step 1: Skim passage in 60-90 seconds for main theme','Step 2: Read questions BEFORE reading carefully','Step 3: For each question, return to relevant passage section','Step 4: Eliminate options — remove factually wrong, extreme, and out-of-scope options','Step 5: Choose the most directly supported answer'],ans:'Systematic approach: Skim → Read questions → Targeted re-reading → Eliminate → Choose'}
],
tips:['Never bring outside knowledge — answer only from passage','Extreme options (always/never/completely) are usually wrong','Paraphrase options: look for the one that says the same thing differently','For tone: look for emotionally loaded words in the passage'],
mistakes:['Reading entire passage word-by-word (too slow)','Choosing options that are "true in general" but not stated in passage','Missing "EXCEPT" in questions (reversing the answer)']},
{title:'Grammar & Error Detection',
intro:'Error detection tests subject-verb agreement, tense consistency, pronoun usage, prepositions, and conjunctions. One part of the sentence will have an error.',
formulas:['Subject-Verb Agreement: Singular subject → singular verb','Each/Every/Either/Neither/None → singular verb','Collective nouns (team/committee/jury) → singular verb (usually)','Neither...nor: verb agrees with nearer subject','The number of + plural noun → singular verb. A number of + plural noun → plural verb','Gerund as subject → singular verb (Swimming is fun)','Pronoun-antecedent: pronoun must agree with its antecedent in number/gender'],
examples:[
{q:'Find error: "Either the manager or his assistants was present."',steps:['Neither...nor/Either...or: verb agrees with NEARER subject','Nearer subject = "assistants" (plural)','Was → Were'],ans:'"was" should be "were"'},
{q:'Find error: "He is one of those students who has failed."',steps:['"Who" refers to "those students" (plural)','So verb should be plural: "have failed"'],ans:'"has" should be "have"'}
],
tips:['Read sentence aloud — incorrect grammar often sounds wrong','Check verb agreement with the true subject, not the closest noun','Look for preposition errors (common exam traps: "interested in", "different from", "capable of")'],
mistakes:['Matching verb with nearest noun instead of actual subject','Confusing "its" (possessive) with "it\'s" (it is)','Missing double negatives (Two negatives = positive)']},
{title:'Fill in the Blanks & Cloze Test',
intro:'These questions test vocabulary, grammar, and comprehension simultaneously. Cloze tests have multiple blanks in a connected passage. Read the entire passage/sentence for context.',
formulas:['Choose word that fits GRAMMATICALLY and SEMANTICALLY','Part of speech check: Is a noun/verb/adjective/adverb needed?','Collocation: words that naturally go together (e.g., "make" a decision, "take" action)','Tone consistency: formal passage needs formal words','Context clues: look for contrast (however/but/although) or continuity (therefore/thus/hence)'],
examples:[
{q:'The government\'s __ to control inflation proved effective.',steps:['Need a noun','Context: refers to actions taken','"Measures" or "initiatives" fits','Cannot be "measure" (singular requires article)'],ans:'"measures" (government\'s measures)'},
{q:'Despite numerous challenges, the economy showed __ signs of recovery.',steps:['"Despite" signals contrast — challenges but positive outcome','Need an adjective for "signs"','"Positive" or "encouraging" fits','Cannot be "discouraging" (contradicts the contrast)'],ans:'"positive" or "encouraging"'}
],
tips:['Eliminate grammatically wrong options first','For cloze: maintain consistent tone/subject throughout','Collocations: "make a decision" NOT "do a decision", "take measures" NOT "make measures"'],
mistakes:['Choosing a word that sounds right but doesn\'t fit grammatically','Ignoring context clues (contrast/result words)','Selecting a word with right meaning but wrong form (noun vs verb)']},
{title:'Sentence Rearrangement (Para Jumbles)',
intro:'Sentences must be arranged to form a coherent paragraph. The TOPIC SENTENCE introduces the main idea. Concluding sentences summarize or give final thought.',
formulas:['Opening: General statement, definition, or introducing a topic','Middle: Explanation, evidence, examples (often connected with pronouns or connectors)','Closing: Conclusion, implication, or summary','Pronoun clue: "it/they/this/these" refers to something already mentioned — sentence with that reference comes after','Connector clue: "however/but/although" = contrast. "therefore/thus/hence" = result. "furthermore/additionally" = addition','Article clue: First mention = "a/an", subsequent = "the"'],
examples:[
{q:'Arrange: P:This is known as monetary policy. Q:Central banks influence economic activity. R:They do this by adjusting interest rates. S:This affects borrowing and spending.',steps:['Q introduces central banks (opening)','R: "They" refers to central banks — follows Q','S: "This" refers to adjusting rates — follows R','P: Defines the overall concept — closing sentence'],ans:'Q-R-S-P'}
],
tips:['Find the opening (doesn\'t start with pronoun referring to unstated entity)','Link sentences using pronouns (they/it/this) — they MUST refer to something','Chronological events: use time markers (first, then, later, finally)'],
mistakes:['Starting with a sentence that contains an undefined pronoun','Not checking all links between consecutive sentences','Ignoring sentence connectors (however, therefore, also)']},
],

banking_awareness:[
{title:'RBI — Structure & Functions',
intro:'The Reserve Bank of India (RBI) is India\'s central bank, established on April 1, 1935. It is the backbone of India\'s financial system and a critical exam topic for both SBI PO and RBI Grade B.',
formulas:['Repo Rate: Cost of short-term borrowing for banks from RBI','Reverse Repo: Rate at which banks park funds with RBI','CRR: % of NDTL as cash with RBI (no interest)','SLR: % of NDTL as liquid assets (gold, govt securities)','Bank Rate: Long-term borrowing rate from RBI','MSF: Emergency overnight borrowing at Bank Rate','NDTL = Demand Liabilities + Time Liabilities - Assets with other banks'],
examples:[
{q:'How does RBI use repo rate to control inflation?',steps:['RBI increases repo rate','Banks\' borrowing cost from RBI increases','Banks pass this on as higher lending rates','Loans become expensive → reduced borrowing','Less money in economy → demand falls → prices fall'],ans:'Increased repo rate → higher lending rates → less credit → reduced demand → lower inflation'},
{q:'What is the difference between CRR and SLR?',steps:['CRR: Must be kept as CASH with RBI, earns NO interest','SLR: Must be kept in LIQUID ASSETS (gold/govt securities), earns returns','Both are calculated on NDTL (Net Demand and Time Liabilities)','CRR gives RBI direct control; SLR ensures banks have liquid buffer'],ans:'CRR = cash with RBI (no returns); SLR = liquid assets maintained by bank (earns returns)'}
],
tips:['Memorize current rates: Repo 6.25%, CRR 4%, SLR 18%','RBI is "bankers\' bank" because it provides credit to and regulates other banks','RBI as "lender of last resort" means it provides emergency funds to prevent bank failure','Remember RBI does NOT accept deposits from public or lend to individuals'],
mistakes:['Confusing Reverse Repo with Repo direction','Thinking banks can keep any assets for CRR — it must be cash','Confusing Bank Rate with Repo Rate']},
{title:'Types of Banks in India',
intro:'India has a diverse banking structure regulated by RBI. Understanding the types, their functions, and regulations is essential for bank exam aspirants.',
formulas:['Commercial Banks: Schedule A (public sector) + Schedule B (private) + foreign banks','Cooperative Banks: Urban Cooperative Banks (UCBs) + Rural Cooperative Banks','Regional Rural Banks (RRBs): Sponsored by commercial banks, serve rural areas','Small Finance Banks: Serve unserved/underserved segments','Payments Banks: Accept deposits (up to ₹1L), no loans, focus on remittances','NABARD: Apex for agriculture credit. SIDBI: Apex for MSMEs. NHB: Apex for housing'],
examples:[
{q:'What is the difference between Payments Bank and Small Finance Bank?',steps:['Payments Bank: Only deposits (₹1L max), no lending, focus on payments','Small Finance Bank: Full banking, can take deposits AND give loans, serves MSMEs/small borrowers','Both require RBI license and full banking compliance'],ans:'Payments banks cannot lend; Small Finance Banks can do full banking for unserved segments'},
],
tips:['PSBs: Government owns >50% (SBI, PNB, BOB, etc.)','Private banks: HDFC, ICICI, Axis, Kotak, IndusInd, Yes Bank','Foreign banks: operate via branches in India (HSBC, Citibank, Standard Chartered)','RRBs: joint ownership — Central Govt (50%), Sponsor Bank (35%), State Govt (15%)'],
mistakes:['Confusing Payments Bank with Small Finance Bank functions','Thinking RRBs are fully owned by sponsor banks (only 35%)','Not knowing that NABARD, SIDBI, NHB are NOT commercial banks']},
{title:'Financial Inclusion Initiatives',
intro:'Financial inclusion means ensuring all individuals and businesses have access to useful and affordable financial products. This is a critical priority for RBI and the Government of India.',
formulas:['PMJDY: Zero-balance savings account, RuPay card, ₹2L accident insurance, ₹10K overdraft','BCs (Business Correspondents): Bank agents in remote areas — retail banking for unbanked','KYC: Know Your Customer — mandatory for all accounts, prevents money laundering','AePS: Aadhaar-enabled payments using biometrics (for rural areas with no smartphone)','UPI 123PAY: UPI for feature phones (no internet/smartphone needed)','USSD: *99# banking on mobile — works on all phones, no internet'],
examples:[
{q:'Why are dormant PMJDY accounts a financial inclusion challenge?',steps:['Account opened but not used = dormant','Shows lack of awareness of banking benefits','Digital/financial literacy gap','Solution: active BC network, DBT (Direct Benefit Transfer) into these accounts'],ans:'Dormant accounts indicate incomplete inclusion — having an account is not enough; regular usage is needed'}
],
tips:['Three pillars of financial inclusion: Access + Usage + Quality','India\'s FI Index: 64.2 (2023), measuring breadth, depth, and quality of inclusion','Gender gap: Women 20% less likely to have bank accounts than men in India','Last-mile challenge: remote areas with no bank branch, limited internet'],
mistakes:['Thinking financial inclusion = only opening accounts','Confusing BC (Business Correspondent) with CSP (Customer Service Point)','Not knowing that even NBFCs, MFIs contribute to financial inclusion']},
{title:'Digital Payments & FinTech',
intro:'India leads the world in real-time digital payments. Understanding NPCI ecosystem, UPI, CBDC, and digital payment trends is critical for both SBI PO and RBI Grade B.',
formulas:['NPCI = National Payments Corporation of India (RBI + IBA joint initiative)','UPI Transaction limit: ₹1-5 lakh (varies by bank/use case)','NEFT: Hourly batches, 24×7, no minimum, for any amount','RTGS: Real-time, min ₹2 lakh, 24×7, for high-value transactions','IMPS: Instant, 24×7, up to ₹5 lakh, interbank','e₹-R (Retail CBDC): Digital rupee for public use, launched December 2022','BBPS: Bharat Bill Payment System — unified bill payment platform'],
examples:[
{q:'Why is India a global leader in UPI payments?',steps:['Zero MDR (Merchant Discount Rate) for small transactions encourages adoption','Interoperability: works across all banks and apps','Smartphone penetration + cheap data (Jio effect)','Government mandate and RBI support','JanDhan + Aadhaar + Mobile (JAM trinity) as base'],ans:'India\'s UPI success: zero-cost, interoperable, smartphone-accessible, government-backed ecosystem built on JAM trinity'}
],
tips:['UPI statistics: 130+ billion transactions in FY24, crossing $1.6 trillion in value','India\'s UPI accounts for ~50% of real-time payments globally','Account Aggregator: new data-sharing framework for personalized financial services','Fintech regulation: RBI Regulatory Sandbox for testing new products'],
mistakes:['Thinking UPI is the same as IMPS (IMPS is the backend rail, UPI is the interface)','Confusing NEFT with RTGS (NEFT = batches, RTGS = real-time, RTGS is for higher amounts)','Not knowing NPCI is not-for-profit']},
],

economics:[
{title:'National Income & GDP',
intro:'GDP (Gross Domestic Product) measures the total economic output of a country. Understanding national income accounting is crucial for RBI Grade B and important for SBI PO Mains.',
formulas:['GDP = C + I + G + (X-M) [Expenditure Method]','GDP = Wages + Rent + Interest + Profit [Income Method]','GDP = Sum of Value Added [Production Method]','GNP = GDP + Net Factor Income from Abroad (NFIA)','NNP = GNP - Depreciation (also called Net National Income)','Real GDP = Nominal GDP / GDP Deflator × 100','Per Capita Income = National Income / Population','GVA at Basic Prices + Net Taxes = GDP at Market Prices'],
examples:[
{q:'If GDP = ₹100 lakh crore and population = 140 crore, per capita income?',steps:['Per Capita = GDP / Population','= 100 lakh crore / 140 crore = 100,00,000 / 140 = ₹71,428'],ans:'~₹71,428 per person per year'},
{q:'India\'s GDP grew at 8.2% in FY24. What does this mean?',steps:['Real GDP in FY24 was 8.2% higher than FY23','This is calculated at constant prices (removes inflation effect)','India became one of the fastest-growing major economies'],ans:'India\'s economy expanded by 8.2% in real terms, indicating strong economic performance'}
],
tips:['India\'s GDP (2024): ~$3.73 trillion, 5th largest economy','GDP Deflator measures overall price level — different from CPI','RBI uses GVA as measure of economic growth besides GDP','Difference: GDP includes taxes-subsidies that GVA doesn\'t'],
mistakes:['Confusing GDP with GNP or GNI','Using nominal GDP to compare growth (should use real GDP)','Forgetting that per capita is average — doesn\'t show distribution']},
{title:'Inflation & Price Indices',
intro:'Inflation is the sustained increase in general price level, reducing purchasing power. RBI\'s primary mandate is price stability — targeting 4% CPI inflation.',
formulas:['CPI = (Cost of Basket in Current Period / Cost of Basket in Base Period) × 100','Inflation Rate = (CPI(t) - CPI(t-1)) / CPI(t-1) × 100','WPI measures wholesale prices (India base: 2011-12)','CPI measures retail prices paid by consumers (base: 2012)','Core Inflation = CPI excluding food and fuel (more stable measure)','Deflation = negative inflation rate. Stagflation = inflation + unemployment'],
examples:[
{q:'If RBI\'s inflation target is 4%, why is it concerned about food inflation being 8%?',steps:['Food has high weight in CPI (~40-50%)','High food inflation hits poor harder','Rural inflation hits farmers and landless workers','Even if core inflation is low, high food prices distort monetary signals'],ans:'Food has large CPI weight, affects the poor most, and distorts the inflation picture even when core is low'}
],
tips:['CPI-IW (Industrial Workers): used for dearness allowance','CPI-Rural and CPI-Urban are combined for headline CPI','WPI has negative weight for services (only goods)','Headline inflation includes all items; Core excludes food & fuel'],
mistakes:['Confusing CPI with WPI (CPI=retail=consumer; WPI=wholesale)','Not knowing base years (CPI base: 2012, WPI base: 2011-12)','Thinking RBI targets WPI — it targets CPI (4%)']},
{title:'Monetary Policy',
intro:'Monetary policy is RBI\'s use of tools to manage money supply, credit, and interest rates to achieve price stability and economic growth.',
formulas:['Quantitative Tools: Repo Rate, Reverse Repo, CRR, SLR, OMO, MSF','Qualitative Tools: Margin requirements, Moral suasion, Selective credit control','Hawkish policy: Raising rates to fight inflation','Dovish policy: Cutting rates to stimulate growth','Transmission: Policy rate → bank rates → lending rates → consumption/investment → inflation','Effective Lower Bound (ELB): Interest rates cannot go below zero (in practice)'],
examples:[
{q:'RBI cuts repo rate by 25 basis points. How does it affect the economy?',steps:['Banks\' borrowing cost from RBI falls','Banks reduce lending rates (MCLR-linked loans adjust)','EMIs decrease → more borrowing → higher consumption','Business loans cheaper → more investment','More money in economy → GDP growth but risk of inflation'],ans:'Rate cut stimulates borrowing, investment, and consumption, boosting GDP but risks higher inflation'}
],
tips:['1 basis point = 0.01% (100 bps = 1%)','MCLR: Marginal Cost of Funds-based Lending Rate — benchmark for bank loans','Repo rate changes affect MCLR with a lag (not immediate)','Accommodative stance: RBI is ready to cut rates. Withdrawal of accommodation: ready to hike'],
mistakes:['Thinking rate cut immediately reduces loan EMIs (there\'s a lag)','Not knowing the difference between repo (short-term overnight) and bank rate (long-term)','Confusing monetary policy with fiscal policy']},
{title:'Fiscal Policy & Government Budget',
intro:'Fiscal policy is the government\'s use of taxation and spending to influence the economy. The Union Budget, presented annually, is the key fiscal document.',
formulas:['Revenue Deficit = Revenue Expenditure - Revenue Receipts','Fiscal Deficit = Total Expenditure - Total Receipts (excluding borrowings)','Primary Deficit = Fiscal Deficit - Interest Payments','Effective Revenue Deficit = Revenue Deficit - Grants for capital creation','FRBM Act 2003: Targets for fiscal deficit (3% of GDP)','Fiscal Multiplier: How much GDP increases per unit of government spending'],
examples:[
{q:'If India\'s FY25 fiscal deficit is ₹17.3 lakh crore and GDP is ₹353 lakh crore, fiscal deficit % of GDP?',steps:['FD% = 17.3/353 × 100 = 4.9%'],ans:'4.9% of GDP (which matches the Union Budget 2024-25 target)'},
{q:'What is the difference between fiscal deficit and revenue deficit?',steps:['Revenue Deficit = Revenue Expend - Revenue Receipts (day-to-day operations)','Fiscal Deficit = Total Expend - Total Receipts excl. borrowings','Fiscal Deficit > Revenue Deficit (it includes capital account too)','Primary Deficit removes interest payment burden from Fiscal Deficit'],ans:'Revenue Deficit = current operations gap; Fiscal Deficit = overall financing gap; Primary Deficit = FD minus interest payments'}
],
tips:['Capital expenditure (capex) is productive; revenue expenditure (opex) is consumption','Higher fiscal deficit → government borrows more → crowding out private investment','Fiscal consolidation = reducing fiscal deficit over time','India\'s golden rule: borrow only for capital expenditure'],
mistakes:['Thinking fiscal deficit = revenue deficit','Not knowing primary deficit excludes interest payments','Confusing capital receipts (borrowings, disinvestment) with capital expenditure']},
],

computer:[
{title:'Computer Fundamentals & Hardware',
intro:'Basic computer knowledge is tested in SBI PO Mains and general banking exams. Focus on hardware components, storage, I/O devices, and number systems.',
formulas:['Data hierarchy: Bit→Byte→KB→MB→GB→TB→PB','1 byte = 8 bits. 1 KB = 1024 bytes. 1 MB = 1024 KB. 1 GB = 1024 MB','Binary to Decimal: multiply each bit by 2^position (right to left)','Decimal to Binary: divide by 2, collect remainders','ASCII: American Standard Code for Information Interchange (7-bit, 128 characters)','Unicode: supports all world scripts (UTF-8 most common)'],
examples:[
{q:'Convert binary 1010 to decimal.',steps:['1×2³ + 0×2² + 1×2¹ + 0×2⁰','= 8 + 0 + 2 + 0'],ans:'10'},
{q:'What is the difference between RAM and ROM?',steps:['RAM: Volatile (loses data when power off), Read-Write, primary memory','ROM: Non-volatile (retains data), Read-Only, stores BIOS/firmware'],ans:'RAM = temporary working memory; ROM = permanent storage for firmware'}
],
tips:['CPU components: ALU (calculations), CU (control), Registers (fastest storage)','Primary memory: RAM + ROM (fast, directly accessible by CPU)','Secondary memory: HDD, SSD, CD/DVD (slower, permanent)','BIOS = Basic Input Output System stored in ROM — first program to run at startup'],
mistakes:['Confusing RAM (volatile) with ROM (non-volatile)','Thinking CPU speed is only about GHz (also depends on cores and architecture)','Mixing up primary and secondary storage']},
{title:'Networking & Internet',
intro:'Computer networking covers how devices communicate. Key concepts: protocols, IP addressing, network types, and internet services. High relevance for bank exams.',
formulas:['OSI Model: 7 layers (Application, Presentation, Session, Transport, Network, Data Link, Physical)','TCP/IP: 4 layers (Application, Transport, Internet, Network Access)','IPv4: 32-bit address (e.g., 192.168.1.1)','IPv6: 128-bit address (solves IPv4 exhaustion)','DNS: Domain Name System — translates domain names to IP','HTTP port: 80, HTTPS port: 443, FTP: 21, SSH: 22','LAN < MAN < WAN in coverage area'],
examples:[
{q:'What is the difference between HTTP and HTTPS?',steps:['HTTP: HyperText Transfer Protocol — unencrypted communication','HTTPS: HTTP + SSL/TLS encryption — secure communication','HTTPS uses port 443; HTTP uses port 80','Look for padlock icon in browser for HTTPS'],ans:'HTTPS adds encryption (SSL/TLS) to HTTP, making data transmission secure'},
{q:'What is an IP address?',steps:['Unique identifier for each device on a network','IPv4: 4 octets (0-255), e.g., 192.168.0.1','IPv6: 128-bit hexadecimal, e.g., 2001:0db8::0001','Dynamic IP: changes; Static IP: fixed'],ans:'IP address is a unique numerical label assigned to each device on a network'}
],
tips:['WWW ≠ Internet (WWW is a service using HTTP that runs ON the Internet)','Client-server model: client requests, server responds','Bandwidth = capacity; Latency = delay','Cloud types: Public (AWS/Azure), Private (company only), Hybrid (both)'],
mistakes:['Confusing WWW with the Internet','Thinking IP address and MAC address are the same (MAC is hardware address)','Not knowing the difference between LAN, MAN, WAN']},
{title:'Cybersecurity & Data Privacy',
intro:'Cybersecurity is increasingly important in banking. Understanding threats, defenses, and best practices is essential for modern bankers.',
formulas:['CIA Triad: Confidentiality + Integrity + Availability','Authentication factors: Something you know + have + are','Encryption: Symmetric (same key encrypt/decrypt) vs Asymmetric (public/private key pair)','Digital Signature: Verify authenticity and non-repudiation','Firewall: Network barrier filtering traffic based on rules','VPN: Encrypted tunnel for secure remote access'],
examples:[
{q:'What is phishing and how to identify it?',steps:['Phishing: fraudulent email/website impersonating legitimate entity','Signs: Urgent language, misspelled domain, requests for credentials','"bank@hdfc.com" vs "bank@hdfcbank.support" (fake domain)','Never click suspicious links — go directly to official website'],ans:'Phishing mimics trusted entities to steal credentials — check email domain and never click unsolicited links'},
{q:'How does two-factor authentication (2FA) enhance security?',steps:['Factor 1: Something you know (password)','Factor 2: Something you have (OTP on phone) or are (fingerprint)','Even if password is stolen, attacker needs the 2nd factor','Banks use 2FA for all transaction OTPs'],ans:'2FA requires two different authentication factors, making account compromise much harder even if password is leaked'}
],
tips:['PCI-DSS: Payment Card Industry Data Security Standard — mandatory for card payments','GDPR: EU data protection law; India has DPDP Act 2023 for data protection','SSL certificate: issued by Certificate Authority (CA), validates website identity','Malware types: Virus (self-replicating), Worm (spreads via network), Trojan (disguised), Ransomware (encrypts files)'],
mistakes:['Thinking a strong password alone is sufficient security','Confusing encryption and hashing (hashing is one-way, encryption is reversible)','Not knowing that HTTP is unencrypted — NEVER enter passwords on HTTP sites']},
]
};
