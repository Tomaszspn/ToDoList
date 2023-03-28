{
    const tasks = [
        {
            content: "nagrać lekcje",
            done: false,
        },
        {
            content: "zjeśc pierogi",
            done: true,

        },
    ];

    const render = () => {
        let htmlString = " ";

        for (const task of tasks) {
            htmlString += `
            <li>
                ${task.content}
                </li>
                `
        }

        document.querySelector(".js-listTasks").innerHTML = htmlString;
    };




    const init = () => {
        render();
    };

    init();
}