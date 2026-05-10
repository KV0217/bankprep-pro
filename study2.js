// Additional Study Content
STUDY.quantitative_aptitude.push(
{title:'Algebra & Linear Equations',
intro:'Algebra questions in bank exams involve solving linear equations, quadratic equations, and finding unknown variables. These form the foundation of many other quantitative topics.',
formulas:['Linear: ax+by=c; solve using substitution or elimination','Quadratic: ax²+bx+c=0; x = (-b ± √(b²-4ac))/2a','Sum of roots = -b/a. Product of roots = c/a','Factorization: ax²+bx+c → (x-r₁)(x-r₂) where r₁,r₂ are roots','Arithmetic progression: nth term = a+(n-1)d, Sum = n/2[2a+(n-1)d]','Geometric progression: nth term = ar^(n-1), Sum = a(r^n-1)/(r-1)'],
examples:[
{q:'Solve: 3x + 4y = 25 and 2x + 3y = 18.',steps:['Multiply 1st eq by 3 and 2nd by 4: 9x+12y=75 and 8x+12y=72','Subtract: x=3','Substitute: 9+4y=25 → y=4'],ans:'x=3, y=4'},
{q:'Find roots of x²-5x+6=0.',steps:['Need two numbers that multiply to 6 and add to -5','(-2)×(-3)=6 and (-2)+(-3)=-5','So (x-2)(x-3)=0'],ans:'x=2 or x=3'},
{q:'If x+1/x = 5, find x²+1/x².',steps:['Square both sides: (x+1/x)² = 25','x²+2+1/x² = 25','x²+1/x² = 23'],ans:'23'}
],
tips:['For two-variable equations: always try to eliminate one variable','Quadratic: if b²-4ac < 0, roots are complex (not real)','Sum and product of roots shortcut saves time in multiple-choice questions','For AP: the middle term = average of all terms'],
mistakes:['Wrong sign when expanding (x-a)(x-b)','Dividing by variable without checking if it could be zero','Missing the ± in quadratic formula — two roots!']},
{title:'Boats, Trains & Clocks',
intro:'Special speed-distance problems with unique conditions. Trains have length that matters; boats deal with current; clocks involve relative angular speed.',
formulas:['Train crossing a pole: Time = Length of Train / Speed','Train crossing platform: Time = (Train Length + Platform Length) / Speed','Trains in opposite direction: T = (L1+L2)/(S1+S2)','Trains in same direction: T = (L1+L2)/|S1-S2|','Boat downstream: D speed = B+S; Upstream: U speed = B-S','Still water speed = (D+U)/2; Stream speed = (D-U)/2','Clock: Minute hand moves 6°/min, Hour hand moves 0.5°/min','Angle between hands = |30H - 11M/2| where H=hour, M=minutes'],
examples:[
{q:'A train 150m long at 54 km/h crosses a bridge of 250m. Time taken?',steps:['Speed = 54 km/h = 54×5/18 = 15 m/s','Total distance = 150+250 = 400m','Time = 400/15 = 26.67 sec'],ans:'26.67 seconds ≈ 26⅔ sec'},
{q:'A boat covers 24 km upstream in 4 hours and 24 km downstream in 3 hours. Speed of stream?',steps:['Upstream speed = 24/4 = 6 km/h','Downstream speed = 24/3 = 8 km/h','Stream speed = (8-6)/2 = 1 km/h'],ans:'1 km/h'},
{q:'At what time between 4 and 5 are the hands coincident?',steps:['At 4:00, minute hand is 20 min behind hour hand (120° behind)','Minute hand gains 55 min on hour hand per 60 min','Time = (120/360)×60/(55/60) → minutes to catch up = 20×(60/55) = 21.81 min','So at 4:21.81 = 4 hrs 21 min 49 sec'],ans:'At 4:21 minutes and approximately 49 seconds'}
],
tips:['Always convert km/h to m/s for train problems (multiply by 5/18)','Boat: know that downstream = B+S, not B-S','Clock hands coincide 11 times in 12 hours (every 65.45 minutes)','For "when do hands form 90°": happens 22 times in 12 hours'],
mistakes:['Forgetting to add both train lengths','Confusing upstream and downstream speeds','Clock problems: forgetting hour hand also moves']},
{title:'Permutations, Combinations & Probability',
intro:'P&C tests counting methods; probability tests likelihood of events. These appear in SBI Mains and RBI Phase 1. Master the basic formulas and then focus on applications.',
formulas:['Permutation (order matters): nPr = n!/(n-r)!','Combination (order doesn\'t matter): nCr = n!/[r!(n-r)!]','P(A) = Favorable outcomes / Total outcomes','P(A or B) = P(A) + P(B) - P(A and B)','P(A and B) = P(A) × P(B) [if independent]','P(not A) = 1 - P(A)','Conditional: P(A|B) = P(A and B)/P(B)','Arrangements of n items with repetitions: n!/p!q! where p,q are repeated item counts'],
examples:[
{q:'In how many ways can 4 boys and 3 girls sit in a row if girls always sit together?',steps:['Treat 3 girls as 1 unit: 5 units total','Arrange 5 units: 5! = 120','Arrange girls within unit: 3! = 6','Total = 120 × 6 = 720'],ans:'720 ways'},
{q:'A bag has 5 red and 4 blue balls. Three drawn randomly. P(at least 2 red)?',steps:['P(exactly 2 red) = C(5,2)×C(4,1)/C(9,3) = 10×4/84 = 40/84','P(exactly 3 red) = C(5,3)/C(9,3) = 10/84','P(at least 2 red) = 40/84 + 10/84 = 50/84 = 25/42'],ans:'25/42'},
{q:'A number is chosen from 1-50. P(it\'s divisible by 3 or 5)?',steps:['Divisible by 3: 3,6,9,...,48 → 16 numbers','Divisible by 5: 5,10,...,50 → 10 numbers','Divisible by 15: 15,30,45 → 3 numbers','P = (16+10-3)/50 = 23/50'],ans:'23/50'}
],
tips:['Use complement: P(at least one) = 1 - P(none)','nCr = nC(n-r) — useful to simplify large r','For arranging around a circle: (n-1)! (fix one position)','Addition rule for mutually exclusive events: just add probabilities'],
mistakes:['Using permutation formula when order doesn\'t matter','Not subtracting intersection in addition rule','Wrong total outcomes (must list all possible outcomes)']},
{title:'Data Sufficiency',
intro:'Data Sufficiency tests whether given data is enough to answer a question. You don\'t need to solve — just determine if you CAN solve with the given information.',
formulas:['Standard choices: A) Statement I alone sufficient, B) Statement II alone, C) Both together, D) Either alone, E) Neither sufficient','Test each statement independently first','Then test together only if neither alone is sufficient','Often appears in SBI PO Mains and RBI Phase 1'],
examples:[
{q:'Is x positive? I: x² = 4. II: x³ = -8.',steps:['Statement I alone: x²=4 → x=2 or x=-2. Cannot determine sign. NOT sufficient.','Statement II alone: x³=-8 → x=-2. Definitely negative. SUFFICIENT.','Answer: Statement II alone is sufficient.'],ans:'B — Statement II alone is sufficient'},
{q:'What is the value of x+y? I: x-y=6. II: x+2y=12.',steps:['I alone: 1 equation, 2 unknowns. Not sufficient.','II alone: 1 equation, 2 unknowns. Not sufficient.','Together: x-y=6 and x+2y=12. Two equations, solve: 3y=6→y=2, x=8. Sufficient together.'],ans:'C — Both statements together are sufficient'}
],
tips:['Always try statements INDEPENDENTLY first — never assume you need both','Common trap: Statement I gives equations that look insufficient but actually restrict values','If a statement gives a range (not exact value), check if question asks for range or exact','Watch for "is x even?" — needs exact value, not just constraints'],
mistakes:['Combining statements when testing individual sufficiency','Thinking two equations always give unique solution (might be dependent)','Not recognizing when inequalities uniquely determine an answer']});

STUDY.banking_awareness.push(
{title:'Monetary Policy Transmission & MCLR',
intro:'Understanding how RBI\'s policy rate changes reach the common borrower through the banking system is crucial. Transmission is often incomplete or delayed — a key challenge.',
formulas:['MCLR = Marginal Cost of Funds + Negative carry on CRR + Operating costs + Tenor premium','Marginal Cost of Funds ≈ 92% of deposit/borrowing cost + 8% equity return','External Benchmark Rate (EBR): For retail loans from Oct 2019 — linked to repo/T-bill/CD rate','Spread = Bank\'s spread (fixed for 3 years) + Credit risk premium + Business strategy premium','EMI = P×r×(1+r)^n/((1+r)^n-1) where r=monthly rate, n=months'],
examples:[
{q:'If RBI cuts repo rate by 25 bps but MCLR only falls 10 bps, what is the transmission issue?',steps:['Banks have high proportion of fixed-rate deposits (don\'t reprice immediately)','Old fixed deposits still at higher rates — increase average funding cost','Banks may keep spreads high to protect margins','Result: Incomplete monetary policy transmission — loan rates don\'t fall proportionally'],ans:'Incomplete transmission occurs when banks\' deposit costs don\'t fall as fast as repo rate, limiting the pass-through to lending rates'},
{q:'External Benchmark vs MCLR — which is more transparent?',steps:['MCLR: Bank calculates internally — opacity about actual cost of funds','External Benchmark (Repo Rate): Published by RBI — fully transparent, market-determined','EBR loans reset every 3 months — much faster than MCLR (1 year)','EBR ensures faster, complete transmission of RBI rate changes'],ans:'External Benchmark System is more transparent and ensures faster, more complete transmission than MCLR'}
],
tips:['Know that home loans post Oct 2019 use External Benchmark (usually repo rate)','MCLR applies to existing floating rate corporate loans mostly','Monetary policy transmission lag: typically 3-6 quarters for full effect','RBI Article: "Transmission of Monetary Policy" is common in RBI Grade B reading'],
mistakes:['Thinking repo rate cut = immediate fall in loan EMIs','Confusing MCLR reset date (typically 1 year) with EBR reset (3 months)','Not knowing that fixed deposits (high proportion) delay transmission']},
{title:'Financial Regulations & Compliance',
intro:'Banking regulations ensure stability, protect depositors, and prevent financial crimes. Key regulations include AML, KYC, FEMA, and various RBI circulars.',
formulas:['AML: Anti-Money Laundering — 3 stages: Placement (introducing illegal money), Layering (disguising), Integration (appearing legitimate)','KYC documents: OVD (Officially Valid Documents) — Aadhaar, Passport, Voter ID, DL, NREGA card, PAN','Suspicious Transaction Report (STR): Submitted to FIU-IND (Financial Intelligence Unit)','Currency Transaction Report (CTR): For cash transactions ≥₹10 lakh','PMLA (Prevention of Money Laundering Act) 2002: Key law against money laundering'],
examples:[
{q:'What is the purpose of STR (Suspicious Transaction Report)?',steps:['Banks must file STR with FIU-IND for any transaction that appears suspicious','Not necessarily large — even small transactions can be suspicious if pattern is unusual','Reporting is mandatory; bank is not required to inform customer','FIU-IND analyzes STRs to detect financial crimes'],ans:'STR is a mandatory report to FIU-IND for transactions that seem suspicious regardless of amount — helps detect money laundering, terrorism financing, and fraud'},
{q:'What is Video KYC (V-CIP)?',steps:['V-CIP: Video-based Customer Identification Process','Allows KYC via live video interaction instead of in-person','Customer shows live photo of OVD (face must match)','Used for paperless account opening during COVID; now standard option'],ans:'V-CIP allows banks to complete KYC verification via live video call, enabling remote account opening without physical presence'}
],
tips:['FIU-IND is under Ministry of Finance (not RBI), though banks report to it','PAN is mandatory for transactions above ₹50,000','RBI\'s KYC Master Direction (updated periodically) is the key regulatory document','FATF (Financial Action Task Force): Global AML standard-setter; India is a member'],
mistakes:['Thinking KYC is one-time (RBI mandates periodic re-KYC based on risk category)','Confusing FIU-IND with CBI or ED (FIU-IND is intelligence unit, not enforcement)']},
{title:'International Banking & Foreign Exchange',
intro:'Forex and international banking are crucial topics for RBI Grade B. India\'s external sector, BoP, capital flows, and exchange rate management are key examination areas.',
formulas:['Exchange Rate: Direct quote = INR per unit of foreign currency (most common in India)','Bid-Ask spread = Ask Price - Bid Price (banks profit from this)','Cross rate: If USD/INR = 83 and USD/EUR = 1.10, EUR/INR = 83/1.10 = 75.45','Purchasing Power Parity (PPP): e = P/P* (domestic/foreign price level ratio)','Interest Rate Parity: Forward premium/discount = (r - r*) × time','Forward Rate = Spot Rate × (1+r_domestic)/(1+r_foreign)'],
examples:[
{q:'India\'s forex reserves stand at $600 billion. Why does RBI intervene in forex market?',steps:['Prevent excessive rupee depreciation (protects imports, prevents inflation from expensive imports)','Prevent excessive appreciation (protects exports competitiveness)','Maintain orderly market conditions (prevent panic)','Build adequate reserve buffer (3 months import cover = minimum comfort)'],ans:'RBI intervenes to prevent excessive volatility, protect export competitiveness, control imported inflation, and maintain adequate reserve buffer'},
{q:'What is the difference between NRE and NRO accounts?',steps:['NRE (Non-Resident External): Holds foreign earnings, fully repatriable, tax-free in India','NRO (Non-Resident Ordinary): Holds Indian income (rent, dividends), repatriable up to $1 million/year','Both are rupee-denominated savings accounts for NRIs','FCNR(B): Foreign Currency Non-Resident Bank — held in foreign currency, fully repatriable'],ans:'NRE = foreign income account (fully repatriable, tax-free); NRO = India-sourced income account (limited repatriation)'}
],
tips:['India\'s forex reserves: ~$600B = ~10 months of import cover (well above 3-month comfort level)','CAD financed through FDI, FPI, ECB, and NRI deposits','Currency swap agreements with neighboring countries reduce USD dependence','FEMA 1999 replaced FERA 1973 — FEMA is civil, not criminal violation'],
mistakes:['Confusing NRE and NRO accounts','Thinking all BoP transactions go through RBI (they go through commercial banks; RBI is overall manager)']});

STUDY.economics.push(
{title:'Agriculture & Rural Economy',
intro:'India\'s agriculture sector contributes ~18% to GDP but employs ~47% of workforce. Agricultural policy, credit, insurance, and marketing reforms are key exam topics, especially for RBI Grade B.',
formulas:['Minimum Support Price (MSP): Government-guaranteed floor price for 23 crops','MSP = A2+FL+50% return (CACP recommendation formula)','A2 = All paid-out costs. FL = Family labor imputed value','Green Revolution: HYV seeds + irrigation + fertilizers (1960s)','Doubling farmers\' income target: By 2022 (based on 2015-16 base)','Agricultural credit target: ₹20 lakh crore for FY2023-24'],
examples:[
{q:'Why is MSP controversial and what are its limitations?',steps:['Benefits: Price assurance prevents distress selling, encourages production of key crops','Limitations: Only 6-7% farmers actually benefit (procurement limited to wheat, rice, limited states)','Creates market distortion — private buyers must compete with government procurement price','Does not cover all 23 crops with procurement; just price announcement','Benefiting states: Punjab, Haryana get most; Bihar, eastern states get little'],ans:'MSP is theoretically strong but limited by weak procurement beyond wheat/rice and geographic concentration of benefits'},
{q:'What is e-NAM and why is it important?',steps:['e-NAM: Electronic National Agriculture Market — online trading platform for agricultural produce','Links physical APMC mandis across states digitally','Allows farmers to sell to any buyer across India — breaks geographical barriers','Improves price discovery through competition','Progress: 1,361+ mandis in 23 states as of 2024'],ans:'e-NAM digitally integrates 1,361+ mandis, enabling farmers to reach national buyers, improve price discovery, and reduce middlemen'}
],
tips:['APMC (Agricultural Produce Market Committee) reforms: Key to modern agricultural marketing','PM-KISAN: ₹6,000/year income support to farmers','MSP revision formula includes C2 (comprehensive cost) demand by farmer unions','Contract farming: Allows direct farmer-corporation deals bypassing middlemen'],
mistakes:['Thinking MSP means government buys all crops at that price (only wheat/rice actively procured)','Confusing NABARD (apex institution) with SIDBI (for MSMEs)']},
{title:'Infrastructure & Industry',
intro:'Infrastructure financing, industrial policy, and the Make in India initiative are important for both SBI PO and RBI Grade B candidates. Understanding credit to industry and NPA formation in this sector is crucial.',
formulas:['Gross Fixed Capital Formation (GFCF): Measure of investment in physical assets','IIP (Index of Industrial Production): Base 2011-12, monthly output measurement','Infrastructure projects: NIP (National Infrastructure Pipeline) ₹111 lakh crore (2019-2025)','PLI (Production Linked Incentive): Incentive for domestic manufacturing in key sectors','DPIIT: Department for Promotion of Industry and Internal Trade — FDI data custodian'],
examples:[
{q:'Why did infrastructure NPAs spike between 2012-2018?',steps:['Aggressive lending during 2005-2012 infrastructure boom without proper due diligence','Projects delayed due to land acquisition issues, environmental clearances, coal scam fallout','Promoters over-leveraged; equity very thin in project finance','Commodity price changes made projects unviable','CDR (Corporate Debt Restructuring) often just deferred the problem'],ans:'Infrastructure NPAs caused by combination of project delays, regulatory issues, over-leveraging, commodity price shocks, and insufficient initial risk assessment'},
{q:'What is the importance of PLI scheme?',steps:['PLI: Production Linked Incentive — companies get incentive for incremental production over base year','Target sectors: Mobile phones, API, medical devices, solar panels, specialty steel, textiles, food processing, etc.','Aims to create global champions, attract manufacturing FDI, generate jobs','Potential output: ₹30+ lakh crore over 5 years; ₹3+ lakh crore incentive outlay'],ans:'PLI scheme attracts global manufacturers, builds domestic supply chains, creates jobs, and reduces import dependence — key pillar of Make in India 2.0'}
],
tips:['NIP (National Infrastructure Pipeline): ₹111 lakh crore investment 2019-25 — roads, railways, power, ports','PM Gati Shakti: Integrates infrastructure planning of 16 ministries on digital platform','Deep discount bonds/ECBs are key infrastructure financing instruments','PPP (Public-Private Partnership) mode: Government provides viability gap funding (VGF)'],
mistakes:['Confusing IIP (industrial output) with GDP (total output)','Thinking PLI = subsidy (it\'s performance-linked incentive — company must first invest and produce)']});

STUDY.reasoning.push(
{title:'Input-Output Machine',
intro:'Input-Output questions give a multi-step word/number rearrangement and ask you to identify a specific step. Always identify the rule carefully from the first few steps.',
formulas:['Common patterns: Numbers sorted (ascending/descending) one at a time','Words sorted alphabetically or by length one at a time','Mixed: first numbers then words, or alternating','Steps: In each step, one or two elements are rearranged to their final position'],
examples:[
{q:'Input: cat 86 lion 43 mango 71. Step 1: 43 cat 86 lion mango 71. Step 2: 43 cat 71 86 lion mango. What is Step 3?',steps:['Pattern: Numbers arranged in ascending order, one per step','Step 1: 43 moved to front (smallest number)','Step 2: 71 moved to next position','Step 3: 86 should move to its position'],ans:'Step 3: 43 cat 71 86 lion mango (86 moves to position 3)'},
{q:'How to identify the rule in 2 steps?',steps:['Observe what CHANGED between Input and Step 1','Observe what CHANGED between Step 1 and Step 2','Verify the pattern is consistent','Apply the pattern to find required step'],ans:'Always trace which elements moved and where they moved — the pattern is your key'}
],
tips:['In SBI PO Mains, 5-7 questions from one input-output set — learn the rule from first step','Numbers can be sorted from either end; words can be alphabetical or reverse alphabetical','Sometimes both words AND numbers are rearranged in alternating steps','If you find the final arrangement, count backward to find intermediate steps'],
mistakes:['Not identifying the rule before attempting questions','Assuming elements always go to one fixed end — check both left and right','Missing that BOTH numbers and words may be arranged simultaneously in some problems']},
{title:'Critical Reasoning',
intro:'Critical reasoning tests logical analysis: assumptions, inferences, conclusions, and arguments. Common in RBI Grade B Phase 1. Requires careful reading and logical rigor.',
formulas:['Assumption: What must be true for the conclusion to follow?','Inference: What MUST follow from the given information?','Strengthener: What makes the argument more compelling?','Weakener: What undermines the argument\'s logic?','Valid conclusion: Can be derived from statements alone, without external knowledge'],
examples:[
{q:'Statement: "To increase savings, the government should raise interest rates." Assumption:',steps:['For the recommendation to make sense, what must already be true?','Assumption: Higher interest rates will encourage people to save more','This is assumed (not stated) — the statement\'s logic depends on this being true'],ans:'Assumption: Higher interest rates incentivize saving by making it more rewarding'},
{q:'Statement: Sales of cars fell 30% in October. Conclusion: People prefer public transport.',steps:['Is the conclusion necessarily true from the statement?','No — cars could have fallen due to: festive purchase postponement, economic uncertainty, fuel prices','We cannot conclude the REASON from the FACT alone'],ans:'The conclusion DOES NOT follow — multiple explanations possible for the observed fact'}
],
tips:['Assumption: look for the "missing link" between premise and conclusion','Inference must follow NECESSARILY — not probably, not possibly','Strengthener must DIRECTLY support the specific conclusion','Weakener must attack the logic or evidence, not just introduce doubt'],
mistakes:['Confusing inference (what must be true) with conclusion (what might be true)','Picking assumptions that are too obvious (almost definitionally true)','Weakener that attacks a related issue but not the specific argument\'s logic']});
