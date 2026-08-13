# Activity: Two Sum

Classic interview problem. Read it here, jot ideas in `two_sum.py` (or rewrite in JS if you prefer). We’ll walk through approaches together — **you don’t need to get a perfect runnable solution today.** Homework is where you’ll submit working LeetCode code.

Bring your **3 printed resumes**. Optional peer swap if we finish early.

---

## Problem (LeetCode 1 — Two Sum)

Given an array of integers `nums` and an integer `target`, return **indices of the two numbers** such that they add up to `target`.

- Exactly one solution
- You may not use the same element twice
- Return the answer in any order

### Examples

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: nums[0] + nums[1] == 9
```

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

```
Input: nums = [3,3], target = 6
Output: [0,1]
```

### Constraints

- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- Only one valid answer exists

### Follow-up

Can you do better than `O(n²)` time?

---

## In class

1. Read the examples
2. Try brute force on paper / in `two_sum.py`
3. Follow the walkthrough (brute force → hash map)
4. Be able to explain the idea in plain English

**Hints (if stuck):** for each number, what complement (`target - nums[i]`) do you need? Where can you remember values you’ve already seen?
