function findLongestCommonPrefix() {
    const input = document.getElementById('inputStrings').value;
    const strs = input.split(',').map(str => str.trim());

    if (strs.length === 0) {
        document.getElementById('result').innerText = 'Please enter some strings.';
        return;
    }

    let result = "";
    const firstStr = strs[0];
    let visualization = "";

    for (let i = 0; i < firstStr.length; i++) {
        let isCommon = true;

        visualization += `<div>Index ${i}: </div>`;
        
        for (const s of strs) {
            if (i >= s.length || s[i] !== firstStr[i]) {
                isCommon = false;
                document.getElementById('result').innerText = `Longest Common Prefix: ${result}`;
                document.getElementById('visualization').innerHTML = visualization;
                return;
            }
            visualization += `<div>String "${s}": ${s[i]} matches</div>`;
        }

        result += firstStr[i];
        visualization += `<div>Common prefix so far: ${result}</div>`;
    }

    document.getElementById('result').innerText = `Longest Common Prefix: ${result}`;
    document.getElementById('visualization').innerHTML = visualization;
}
