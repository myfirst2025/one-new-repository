// 1. SCL-90核心数据（题目、因子分类、详细解释）
const scl90Questions = [
    "头痛", "神经过敏，心中不踏实", "头脑中有不必要的想法或字句盘旋", "头昏或昏倒", "对异性的兴趣减退",
    "对旁人责备求全", "感到别人能控制您的思想", "责怪别人制造麻烦", "忘记性大", "担心自己的衣饰整齐及仪态的端正",
    "容易烦恼和激动", "胸痛", "害怕空旷的场所或街道", "感到自己的精力下降，活动减慢", "想结束自己的生命",
    "听到旁人听不到的声音", "发抖", "感到大多数人都不可信任", "胃口不好", "容易哭泣",
    "同异性相处时感到害羞不自在", "感到受骗，中了圈套或有人想抓住您", "无缘无故地突然感到害怕", "自己不能控制地大发脾气", "怕单独出门",
    "经常责怪自己", "腰痛", "感到难以完成任务", "感到孤独", "感到苦闷",
    "过分担忧", "对事物不感兴趣", "感到害怕", "您的感情容易受到伤害", "旁人能知道您的私下想法",
    "感到别人不理解您、不同情您", "感到人们对您不友好，不喜欢您", "做事必须做得很慢以保证做得正确", "心跳得很厉害", "恶心或胃部不舒服",
    "感到比不上他人", "肌肉酸痛", "感到有人在监视您、谈论您", "难以入睡", "做事必须反复检查",
    "难以作出决定", "怕乘电车、公共汽车、地铁或火车", "呼吸有困难", "一阵阵发冷或发热", "因为感到害怕而避开某些东西、场合或活动",
    "脑子变空了", "身体发麻或刺痛", "喉咙有梗塞感", "感到前途没有希望", "不能集中注意",
    "感到身体的某一部分软弱无力", "感到紧张或容易紧张", "感到手或脚发重", "想到死亡的事", "吃得太多",
    "当别人看着您或谈论您时感到不自在", "有一些不属于您自己的想法", "有想打人或伤害他人的冲动", "醒得太早", "必须反复洗手、点数目或触摸某些东西",
    "睡得不稳不深", "有想摔坏或破坏东西的冲动", "有一些别人没有的想法或念头", "感到对别人神经过敏", "在商店或电影院等人多的地方感到不自在",
    "感到做任何事情都很困难", "一阵阵恐惧或惊恐", "感到在公共场合吃东西很不舒服", "经常与人争论", "单独一人时神经很紧张",
    "别人对您的成绩没有作出恰当的评价", "即使和别人在一起也感到孤单", "感到坐立不安心神不定", "感到自己没有什么价值", "感到熟悉的东西变成陌生或不像是真的",
    "大叫或摔东西", "害怕会在公共场合昏倒", "感到别人想占您的便宜", "为一些有关性的想法而很苦恼", "您认为应该因为自己的过错而受到惩罚",
    "感到要很快把事情做完", "感到自己的身体有严重问题", "从未感到和其他人很亲近", "感到自己有罪", "感到自己的脑子有毛病"
];

// 因子分类（对应题目索引，与scl90Questions数组匹配）
const factors = {
    "躯体化": [0, 11, 26, 38, 39, 46, 50, 71, 85],
    "强迫症状": [2, 28, 36, 44, 53, 62, 77, 87, 89],
    "人际关系敏感": [5, 20, 33, 35, 66, 68, 82],
    "抑郁": [4, 13, 14, 25, 29, 30, 47, 48, 54, 55, 72, 79, 86],
    "焦虑": [1, 10, 22, 32, 45, 56, 64, 74, 80],
    "敌对": [7, 21, 57, 69, 81, 83],
    "恐怖": [12, 23, 24, 40, 58, 59, 70, 75],
    "偏执": [6, 17, 34, 60, 63, 76, 84],
    "精神病性": [8, 15, 16, 31, 37, 41, 42, 61, 67, 78],
    "其他（饮食睡眠）": [3, 9, 18, 19, 27, 43, 49, 51, 52, 65, 73]
};

// 因子详细解释
const factorExplanations = {
    "躯体化": "主要反映主观的身体不适感，包括心血管、胃肠道、呼吸系统的主诉不适，以及头痛、背痛、肌肉酸痛和焦虑的其他躯体表现。",
    "强迫症状": "主要指那些明知没有必要，但又无法摆脱的无意义的思想、冲动和行为，以及一些比较一般的认知障碍的行为征象。",
    "人际关系敏感": "主要指某些个人不自在与自卑感，特别是在与其他人相比较时更加突出。在人际交往中的自卑感，心神不安，明显不自在，以及人际交流中的自我意识，消极的期待亦是这方面症状的典型原因。",
    "抑郁": "以苦闷的情感与心境为代表性症状，还以生活兴趣的减退，动力缺乏，活力丧失等为特征。还反映出失望，悲观以及与抑郁相联系的认知和躯体方面的感受。",
    "焦虑": "一般指那些烦躁，坐立不安，神经过敏，紧张以及由此产生的躯体征象，如震颤等。测定游离不定的焦虑及惊恐发作是本因子的主要内容。",
    "敌对": "主要从思想，感情及行为三个方面来反映敌对的表现。其项目包括厌烦的感觉，摔物，争论直到不可控制的脾气爆发等各方面。",
    "恐怖": "恐惧的对象包括出门旅行，空旷场地，人群或公共场所和交通工具。此外，还有反映社交恐怖的一些项目。",
    "偏执": "本因子是围绕偏执性思维的基本特征而制订：主要指投射性思维，敌对，猜疑，关系观念，妄想，被动体验和夸大等。",
    "精神病性": "反映各式各样的急性症状和行为，有代表性地视为较隐讳，限定不严的精神病性过程的指征。此外，也可以反映精神病性行为的继发征兆和分裂性生活方式的指征。",
    "其他（饮食睡眠）": "主要反映睡眠及饮食情况。"
};

// 2. 页面加载完成后执行初始化
document.addEventListener('DOMContentLoaded', function() {
    // 动态生成90道测试题
    generateQuestions();
    // 初始化进度显示
    updateProgress();
    // 绑定表单提交事件
    bindFormSubmit();
});

// 3. 动态生成测试题目
function generateQuestions() {
    const questionsContainer = document.getElementById('questions');
    scl90Questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.className = 'question';
        questionElement.innerHTML = `
            <div class="question-number">${index + 1}. ${question}</div>
            <div class="options">
                <div class="option">
                    <input type="radio" id="q${index}-1" name="q${index}" value="1" required>
                    <label for="q${index}-1">没有</label>
                </div>
                <div class="option">
                    <input type="radio" id="q${index}-2" name="q${index}" value="2">
                    <label for="q${index}-2">很轻</label>
                </div>
                <div class="option">
                    <input type="radio" id="q${index}-3" name="q${index}" value="3">
                    <label for="q${index}-3">中等</label>
                </div>
                <div class="option">
                    <input type="radio" id="q${index}-4" name="q${index}" value="4">
                    <label for="q${index}-4">偏重</label>
                </div>
                <div class="option">
                    <input type="radio" id="q${index}-5" name="q${index}" value="5">
                    <label for="q${index}-5">严重</label>
                </div>
            </div>
        `;
        questionsContainer.appendChild(questionElement);

        // 为每个单选框绑定进度更新事件
        const radioInputs = questionElement.querySelectorAll('input[type="radio"]');
        radioInputs.forEach(radio => {
            radio.addEventListener('change', updateProgress);
        });
    });
}

// 4. 更新测试进度（已完成题数/剩余题数）
function updateProgress() {
    const answeredCount = document.querySelectorAll('input[type="radio"]:checked').length;
    const remainingCount = 90 - answeredCount;
    
    document.getElementById('progress').textContent = answeredCount;
    document.getElementById('remaining').textContent = remainingCount;

    // 全部答完显示完成提示
    if (answeredCount === 90) {
        document.getElementById('completion-message').style.display = 'block';
    } else {
        document.getElementById('completion-message').style.display = 'none';
    }
}

// 5. 绑定表单提交事件（计算并显示结果）
function bindFormSubmit() {
    const testForm = document.getElementById('scl90-test');
    testForm.addEventListener('submit', function(e) {
        e.preventDefault(); // 阻止表单默认提交

        // 显示加载状态
        document.getElementById('loading').style.display = 'block';
        document.querySelector('.submit-btn').disabled = true;

        // 模拟计算延迟（提升用户体验）
        setTimeout(() => {
            // 收集所有题目答案（校验是否全部答完）
            const answers = collectAnswers();
            if (!answers) {
                // 未答完时取消加载状态
                document.getElementById('loading').style.display = 'none';
                document.querySelector('.submit-btn').disabled = false;
                return;
            }

            // 计算总分、因子分等核心数据
            const resultData = calculateResults(answers);
            // 显示测试结果
            displayResults(resultData);

            // 隐藏加载状态
            document.getElementById('loading').style.display = 'none';
            document.querySelector('.submit-btn').disabled = false;
        }, 1000); // 1秒延迟
    });
}

// 6. 收集所有题目答案（返回数组或false）
function collectAnswers() {
    const answers = [];
    for (let i = 0; i < scl90Questions.length; i++) {
        const selectedRadio = document.querySelector(`input[name="q${i}"]:checked`);
        if (!selectedRadio) {
            // 提示未答题目并滚动定位
            alert(`请回答第 ${i + 1} 题`);
            const targetQuestion = document.querySelector(`input[name="q${i}"]`).closest('.question');
            targetQuestion.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return false;
        }
        answers.push(parseInt(selectedRadio.value));
    }
    return answers;
}

// 7. 计算测试结果（总分、因子分等）
function calculateResults(answers) {
    // 计算总分
    const totalScore = answers.reduce((sum, score) => sum + score, 0);
    // 计算阳性项目数（≥2分的题目）
    const positiveItems = answers.filter(score => score > 1).length;
    // 计算阳性症状均分（阳性项目总分/阳性项目数）
    const positiveScore = positiveItems > 0 ? (totalScore / positiveItems).toFixed(2) : '0.00';
    // 计算总症状指数（总分/90）
    const totalIndex = (totalScore / 90).toFixed(2);

    // 计算各因子分（因子题目总分/因子题目数量）
    const factorScores = {};
    for (const [factorName, questionIndices] of Object.entries(factors)) {
        const factorTotal = questionIndices.reduce((sum, index) => sum + answers[index], 0);
        factorScores[factorName] = (factorTotal / questionIndices.length).toFixed(2);
    }

    return {
        totalScore,
        positiveItems,
        positiveScore,
        totalIndex,
        factorScores
    };
}

// 8. 显示测试结果（渲染到页面）
function displayResults(resultData) {
    const { totalScore, positiveItems, positiveScore, totalIndex, factorScores } = resultData;
    const resultsDiv = document.getElementById('results');
    const factorResultsTable = document.getElementById('factor-results');
    const factorDetailsContainer = document.getElementById('factor-details');

    // 1. 渲染总分相关数据
    document.getElementById('total-score').textContent = totalScore;
    document.getElementById('total-index').textContent = totalIndex;
    document.getElementById('positive-items').textContent = positiveItems;
    document.getElementById('positive-score').textContent = positiveScore;

    // 2. 清空历史结果
    factorResultsTable.innerHTML = '';
    factorDetailsContainer.innerHTML = '<h3>各因子详细解释</h3>';

    // 3. 渲染因子分表格和详细解释
    for (const [factorName, score] of Object.entries(factorScores)) {
        const scoreValue = parseFloat(score);
        // 判定因子状态（正常/轻微/中等/严重）
        let status, statusClass, statusExplanation;
        if (scoreValue < 1.5) {
            status = "正常";
            statusClass = "score-low";
            statusExplanation = "该因子得分在正常范围内，无明显症状表现。";
        } else if (scoreValue < 2) {
            status = "轻微";
            statusClass = "score-moderate";
            statusExplanation = "该因子有轻微症状表现，建议关注。";
        } else if (scoreValue < 3) {
            status = "中等";
            statusClass = "score-high";
            statusExplanation = "该因子有中等程度症状，建议寻求专业意见。";
        } else {
            status = "严重";
            statusClass = "score-high";
            statusExplanation = "该因子症状较为明显，建议咨询专业心理医生。";
        }

        // 3.1 渲染因子分表格行
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
            <td>${factorName}</td>
            <td>${score}</td>
            <td>1.0-1.5</td>
            <td class="${statusClass}">${status}</td>
            <td>${statusExplanation}</td>
        `;
        factorResultsTable.appendChild(tableRow);

        // 3.2 渲染因子详细解释
        const factorExplanationDiv = document.createElement('div');
        factorExplanationDiv.className = 'factor-explanation';
        factorExplanationDiv.innerHTML = `
            <h3>${factorName}因子</h3>
            <p><strong>得分：${score} | 状态：<span class="${statusClass}">${status}</span></strong></p>
            <p><strong>解释：</strong>${factorExplanations[factorName]}</p>
            <p><strong>说明：</strong>${statusExplanation}</p>
        `;
        factorDetailsContainer.appendChild(factorExplanationDiv);
    }

    // 4. 显示结果区域并滚动定位
    resultsDiv.style.display = 'block';
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
}
