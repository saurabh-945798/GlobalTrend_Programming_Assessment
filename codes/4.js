function areAnagrams(str1, str2) {
    const normalize = str => str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
    return normalize(str1) === normalize(str2);
  }
  