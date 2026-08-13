# Homework 3: Interview Ready

**Objective:** Elevator pitch + one STAR answer + one LeetCode solution (this is the coding piece you actually run and submit).

**Due:** before the next session (push to your fork). Pre resources: [../pre/README.md](../pre/README.md).

---

## Part 1: Elevator pitch (60–90 seconds)

Write a script in [`elevator_pitch.md`](elevator_pitch.md) you could say out loud.

Include: who you are, co-op path you’re targeting, one real proof point (project / SWEF / job / etc.), what you want next.

Time yourself — **60–90 seconds** max. Specific > buzzwords.

---

## Part 2: STAR behavioral answer

Answer this in [`star_response.md`](star_response.md) using the S/T/A/R headings:

> Tell me about a time you faced a challenge while working on a project or with a team. What did you do, and what was the result?

Real story. **Action** = what *you* did. **Result** = outcome (+ learning if you can).

---

## Part 3: LeetCode — Longest Substring Without Repeating Characters

Slightly harder than Two Sum. Implement it in [`leetcode/solution.py`](leetcode/solution.py) (or rewrite as `.js` if you prefer — submit one file). Run it locally so the prints look right.

### Problem (LeetCode 3)

Given a string `s`, return the length of the **longest substring** without repeating characters.

```
Input: s = "abcabcbb"
Output: 3
Explanation: "abc"
```

```
Input: s = "bbbbb"
Output: 1
```

```
Input: s = "pwwkew"
Output: 3
Explanation: "wke" (substring, not subsequence)
```

Constraints: `0 <= s.length <= 5 * 10^4`; `s` is English letters, digits, symbols, spaces.

Optional: also try it on [LeetCode #3](https://leetcode.com/problems/longest-substring-without-repeating-characters/).

**Hint:** sliding window — expand right; when you see a duplicate, shrink from the left.

---

## Part 4: Submission

Fill [`submission.md`](submission.md) briefly (~150 words total): co-op path, one resume change, what was hard about the LeetCode, pitch timing.

---

## AI note

AI is fine. You still need to explain your pitch, STAR story, and solution if asked.

## Self-check

- [ ] Pitch timed 60–90s
- [ ] STAR filled with a real story
- [ ] `leetcode/solution.py` (or `.js`) runs and prints sensible answers
- [ ] `submission.md` done + pushed to your fork
