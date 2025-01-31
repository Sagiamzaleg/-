const topics = {
    "היכרות": [
        "אם היית יכול להיוולד בכל מדינה אחרת, איפה היית רוצה?",
        "מה השיר או הסרט שהכי מסמל לך ילדות?",
        "מה המקום הכי מטורף שהיית בו?"
    ],
    "הומור": [
        "אם היית יכול להפוך לכל חיה ליום אחד, איזו חיה היית בוחר?",
        "מה הדבר הכי מביך שקרה לך בבית ספר?",
        "איזה שם היית נותן לחברה הכי גרועה בעולם?"
    ],
    "זוגיות": [
        "מה הדבר הראשון ששמת לב אליי כשהכרנו?",
        "איזה תכונה אצלי הכי גורמת לך לחייך?",
        "מה השיר שמזכיר לך אותי?"
    ],
    "עמוק": [
        "אם היית יכול לתת לעצמך הצעיר עצה אחת, מה היא הייתה?",
        "מה הדבר שהכי השפיע על מי שאתה היום?",
        "איך אתה מדמיין את עצמך בעוד עשר שנים?"
    ]
};

function generateTopic() {
    const categories = Object.keys(topics);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const randomTopic = topics[randomCategory][Math.floor(Math.random() * topics[randomCategory].length)];
    
    document.getElementById("topic").innerText = `${randomTopic} (${randomCategory})`;
}
