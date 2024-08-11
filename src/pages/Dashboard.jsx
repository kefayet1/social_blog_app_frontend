
const Dashboard = () => {
    return (
        <div>
            <div className="bg-indigo-600 px-8 pt-10 lg:pt-14 pb-16 flex justify-between items-center mb-3">
                    {/* <!-- title --> */}
                    <h1 className="text-xl text-white">Project</h1>
                    <a
                        href="#"
                        className="btn bg-white text-gray-800 border-gray-600 hover:bg-gray-100 hover:text-gray-800 hover:border-gray-200 active:bg-gray-100 active:text-gray-800 active:border-gray-200 focus:outline-none focus:ring-4 focus:ring-indigo-300"
                    >
                        Create New Project
                    </a>
                </div>
            <div className="-mt-12 mx-6 mb-6 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 xl:grid-cols-4">
                {/* <!-- card --> */}
                <div className="card shadow">
                    {/* <!-- card body --> */}
                    <div className="card-body">
                        {/* <!-- content --> */}
                        <div className="flex justify-between items-center">
                            <h4>Projects</h4>
                            <div className="bg-indigo-600 bg-opacity-10 rounded-md w-10 h-10 flex items-center justify-center text-center text-indigo-600">
                                <i data-feather="briefcase"></i>
                            </div>
                        </div>
                        <div className="mt-4 flex flex-col gap-0 text-base">
                            <h2 className="text-xl font-bold">18</h2>
                            <div>
                                <span>2</span>
                                <span className="text-gray-500">Completed</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- card --> */}
                <div className="card shadow">
                    {/* <!-- card boduy --> */}
                    <div className="card-body">
                        {/* <!-- content --> */}
                        <div className="flex justify-between items-center">
                            <h4>Active Task</h4>
                            <div className="bg-indigo-600 bg-opacity-10 rounded-md w-10 h-10 flex items-center justify-center text-center text-indigo-600">
                                <i data-feather="list"></i>
                            </div>
                        </div>
                        <div className="mt-4 flex flex-col gap-0 text-base">
                            <h2 className="text-xl font-bold">132</h2>
                            <div>
                                <span>28</span>
                                <span className="text-gray-500">Completed</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- card --> */}
                <div className="card shadow">
                    {/* <!-- card body --> */}
                    <div className="card-body">
                        {/* <!-- content --> */}
                        <div className="flex justify-between items-center">
                            <h4>Teams</h4>
                            <div className="bg-indigo-600 bg-opacity-10 rounded-md w-10 h-10 flex items-center justify-center text-center text-indigo-600">
                                <i data-feather="users"></i>
                            </div>
                        </div>
                        <div className="mt-4 flex flex-col gap-0 text-base">
                            <h2 className="text-xl font-bold">12</h2>
                            <div>
                                <span>1</span>
                                <span className="text-gray-500">Completed</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- card --> */}
                <div className="card shadow">
                    {/* <!-- card body --> */}
                    <div className="card-body">
                        {/* <!-- content --> */}
                        <div className="flex justify-between items-center">
                            <h4>Productivity</h4>
                            <div className="bg-indigo-600 bg-opacity-10 rounded-md w-10 h-10 flex items-center justify-center text-center text-indigo-600">
                                <i data-feather="target"></i>
                            </div>
                        </div>
                        <div className="mt-4 flex flex-col gap-0 text-base">
                            <h2 className="text-xl font-bold">76%</h2>
                            <div>
                                <span className="text-green-600">5%</span>
                                <span className="text-gray-500">Completed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-6 grid grid-cols-1 xl:grid-cols-3 grid-rows-1 grid-flow-row-dense gap-6">
                <div className="xl:col-span-2">
                    <div className="card h-full shadow">
                        {/* <!-- heading --> */}
                        <div className="border-b border-gray-300 px-5 py-4">
                            <h4>Active Projects</h4>
                        </div>

                        <div className="relative overflow-x-auto">
                            {/* <!-- table --> */}
                            <table className="text-left w-full whitespace-nowrap">
                                <thead className="text-gray-700">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="border-b bg-gray-100 px-6 py-3"
                                        >
                                            Project name
                                        </th>
                                        <th
                                            scope="col"
                                            className="border-b bg-gray-100 px-6 py-3"
                                        >
                                            Hours
                                        </th>
                                        <th
                                            scope="col"
                                            className="border-b bg-gray-100 px-6 py-3"
                                        >
                                            Priority
                                        </th>
                                        <th
                                            scope="col"
                                            className="border-b bg-gray-100 px-6 py-3"
                                        >
                                            Members
                                        </th>
                                        <th
                                            scope="col"
                                            className="border-b bg-gray-100 px-6 py-3"
                                        >
                                            Progress
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            <div className="flex items-center">
                                                <img
                                                    src="./assets/images/svg/brand-logo-1.svg"
                                                    alt=""
                                                    className="h-6 w-6"
                                                />

                                                <h5 className="mb-1 ml-4">
                                                    <a href="#!">
                                                        Dropbox Design System
                                                    </a>
                                                </h5>
                                            </div>
                                        </td>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            34
                                        </td>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            <span className="bg-yellow-200 px-2 py-1 text-yellow-700 text-sm font-medium rounded-full inline-block whitespace-nowrap text-center">
                                                Medium
                                            </span>
                                        </td>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            <div className="-space-x-5">
                                                <img
                                                    className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2"
                                                    src="./assets/images/avatar/avatar-1.jpg"
                                                    alt="Profile image"
                                                />
                                                <img
                                                    className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2"
                                                    src="./assets/images/avatar/avatar-2.jpg"
                                                    alt="Profile image"
                                                />
                                                <img
                                                    className="relative inline-block object-cover w-8 h-8 border-2 rounded-full border-white"
                                                    src="./assets/images/avatar/avatar-1.jpg"
                                                    alt="Profile image"
                                                />
                                                <div className="relative w-8 h-8 bg-indigo-600 rounded-full inline-flex items-center justify-center text-white text-sm border-2 border-white">
                                                    2+
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-gray-300 py-3 px-6 pe-6 text-left">
                                            <div className="flex items-center gap-2">
                                                <div>15%</div>
                                                <div className="w-full bg-gray-200 rounded-full h-1.5">
                                                    <div
                                                        className="bg-indigo-600 h-1.5 rounded-full"
                                                        style={{
                                                            width: "15%",
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            <div className="flex items-center">
                                                <img
                                                    src="./assets/images/svg/brand-logo-2.svg"
                                                    alt=""
                                                    className="h-6 w-6"
                                                />
                                                <h5 className="ml-4">
                                                    <a href="#!">
                                                        Slack Team UI Design
                                                    </a>
                                                </h5>
                                            </div>
                                        </td>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            47
                                        </td>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            <span className="bg-red-200 px-2 py-1 text-red-700 text-sm font-medium rounded-full inline-block whitespace-nowrap text-center">
                                                High
                                            </span>
                                        </td>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            <div className="-space-x-5">
                                                <img
                                                    className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2"
                                                    src="./assets/images/avatar/avatar-4.jpg"
                                                    alt="Profile image"
                                                />
                                                <img
                                                    className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2"
                                                    src="./assets/images/avatar/avatar-5.jpg"
                                                    alt="Profile image"
                                                />
                                                <img
                                                    className="relative inline-block object-cover w-8 h-8 border-2 rounded-full border-white"
                                                    src="./assets/images/avatar/avatar-6.jpg"
                                                    alt="Profile image"
                                                />
                                                <div className="relative w-8 h-8 bg-indigo-600 rounded-full inline-flex items-center justify-center text-white text-sm border-2 border-white">
                                                    2+
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-gray-300 py-3 px-6 pe-6 text-left">
                                            <div className="flex items-center gap-2">
                                                <div>35%</div>
                                                <div className="w-full bg-gray-200 rounded-full h-1.5">
                                                    <div
                                                        className="bg-indigo-600 h-1.5 rounded-full"
                                                        style={{
                                                            width: "35%",
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            <div className="flex items-center">
                                                <img
                                                    src="../assets/images/svg/brand-logo-3.svg"
                                                    alt=""
                                                    className="h-6 w-6"
                                                />
                                                <h5 className="ml-4">
                                                    <a href="#!">
                                                        GitHub Satellite
                                                    </a>
                                                </h5>
                                            </div>
                                        </td>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            120
                                        </td>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            <span className="bg-cyan-200 px-2 py-1 text-cyan-700 text-sm font-medium rounded-full inline-block whitespace-nowrap text-center">
                                                Low
                                            </span>
                                        </td>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            <div className="-space-x-5">
                                                <img
                                                    className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2"
                                                    src="./assets/images/avatar/avatar-7.jpg"
                                                    alt="Profile image"
                                                />
                                                <img
                                                    className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2"
                                                    src="./assets/images/avatar/avatar-8.jpg"
                                                    alt="Profile image"
                                                />
                                                <img
                                                    className="relative inline-block object-cover w-8 h-8 border-2 rounded-full border-white"
                                                    src="./assets/images/avatar/avatar-9.jpg"
                                                    alt="Profile image"
                                                />
                                                <div className="relative w-8 h-8 bg-indigo-600 rounded-full inline-flex items-center justify-center text-white text-sm border-2 border-white">
                                                    5+
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-gray-300 py-3 px-6 pe-6 text-left">
                                            <div className="flex items-center gap-2">
                                                <div>75%</div>
                                                <div className="w-full bg-gray-200 rounded-full h-1.5">
                                                    <div
                                                        className="bg-indigo-600 h-1.5 rounded-full"
                                                        style={{
                                                            width: "75%",
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            <div className="flex items-center">
                                                <img
                                                    src="./assets/images/svg/brand-logo-4.svg"
                                                    alt=""
                                                    className="h-6 w-6"
                                                />
                                                <h5 className="ml-4">
                                                    <a href="#!">
                                                        3D Character Modelling
                                                    </a>
                                                </h5>
                                            </div>
                                        </td>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            89
                                        </td>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            <span className="bg-yellow-200 px-2 py-1 text-yellow-700 text-sm font-medium rounded-full inline-block whitespace-nowrap text-center">
                                                Medium
                                            </span>
                                        </td>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            <div className="-space-x-5">
                                                <img
                                                    className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2"
                                                    src="./assets/images/avatar/avatar-10.jpg"
                                                    alt="Profile image"
                                                />
                                                <img
                                                    className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2"
                                                    src="./assets/images/avatar/avatar-11.jpg"
                                                    alt="Profile image"
                                                />
                                                <img
                                                    className="relative inline-block object-cover w-8 h-8 border-2 rounded-full border-white"
                                                    src="./assets/images/avatar/avatar-12.jpg"
                                                    alt="Profile image"
                                                />
                                                <div className="relative w-8 h-8 bg-indigo-600 rounded-full inline-flex items-center justify-center text-white text-sm border-2 border-white">
                                                    5+
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-gray-300 py-3 px-6 pe-6 text-left">
                                            <div className="flex items-center gap-2">
                                                <div>63%</div>
                                                <div className="w-full bg-gray-200 rounded-full h-1.5">
                                                    <div
                                                        className="bg-indigo-600 h-1.5 rounded-full"
                                                        style={{
                                                            width: "63%",
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            <div className="flex items-center">
                                                <img
                                                    src="./assets/images/svg/brand-logo-5.svg"
                                                    alt=""
                                                    className="h-6 w-6"
                                                />
                                                <h5 className="ml-4">
                                                    <a href="#!">
                                                        Webapp Design System
                                                    </a>
                                                </h5>
                                            </div>
                                        </td>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            89
                                        </td>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            <span className="bg-green-200 px-2 py-1 text-green-700 text-sm font-medium rounded-full inline-block whitespace-nowrap text-center">
                                                Track
                                            </span>
                                        </td>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            <div className="-space-x-5">
                                                <img
                                                    className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2"
                                                    src="./assets/images/avatar/avatar-13.jpg"
                                                    alt="Profile image"
                                                />
                                                <img
                                                    className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2"
                                                    src="./assets/images/avatar/avatar-11.jpg"
                                                    alt="Profile image"
                                                />
                                                <img
                                                    className="relative inline-block object-cover w-8 h-8 border-2 rounded-full border-white"
                                                    src="./assets/images/avatar/avatar-12.jpg"
                                                    alt="Profile image"
                                                />
                                                <div className="relative w-8 h-8 bg-indigo-600 rounded-full inline-flex items-center justify-center text-white text-sm border-2 border-white">
                                                    5+
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-gray-300 py-3 px-6 pe-6 text-left">
                                            <div className="flex items-center gap-2">
                                                <div>100%</div>
                                                <div className="w-full bg-gray-200 rounded-full h-1.5">
                                                    <div
                                                        className="bg-green-600 h-1.5 rounded-full"
                                                        style={{
                                                            width: "100%",
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            <div className="flex items-center">
                                                <img
                                                    src="./assets/images/svg/brand-logo-6.svg"
                                                    alt=""
                                                    className="h-6 w-6"
                                                />
                                                <h5 className="ml-4">
                                                    <a href="#!">
                                                        Github Event Design
                                                    </a>
                                                </h5>
                                            </div>
                                        </td>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            120
                                        </td>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            <span className="bg-cyan-200 px-2 py-1 text-cyan-700 text-sm font-medium rounded-full inline-block whitespace-nowrap text-center">
                                                Low
                                            </span>
                                        </td>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            <div className="-space-x-5">
                                                <img
                                                    className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2"
                                                    src="./assets/images/avatar/avatar-13.jpg"
                                                    alt="Profile image"
                                                />
                                                <img
                                                    className="relative inline-block object-cover w-8 h-8 rounded-full border-white border-2"
                                                    src="./assets/images/avatar/avatar-11.jpg"
                                                    alt="Profile image"
                                                />
                                                <img
                                                    className="relative inline-block object-cover w-8 h-8 border-2 rounded-full border-white"
                                                    src="./assets/images/avatar/avatar-12.jpg"
                                                    alt="Profile image"
                                                />
                                                <div className="relative w-8 h-8 bg-indigo-600 rounded-full inline-flex items-center justify-center text-white text-sm border-2 border-white">
                                                    4+
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-b border-gray-300 py-3 px-6 pe-6 text-left">
                                            <div className="flex items-center gap-2">
                                                <div>75%</div>
                                                <div className="w-full bg-gray-200 rounded-full h-1.5">
                                                    <div
                                                        className="bg-indigo-600 h-1.5 rounded-full"
                                                        style={{
                                                            width: "75%",
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* <!-- card --> */}
                <div className="card h-full shadow">
                    <div className="border-b border-gray-300 px-5 py-4 flex justify-between items-center">
                        <h4>Tasks Performance</h4>
                        {/* <!-- dropdown --> */}
                        <div className="dropdown leading-4">
                            <button
                                className="text-gray-600 p-2 hover:bg-gray-300 rounded-full transition-all"
                                type="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i
                                    data-feather="more-vertical"
                                    className="w-4 h-4"
                                ></i>
                            </button>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- card body --> */}
                    <div className="card-body">
                        <div id="perfomanceChart"></div>
                        <div className="flex items-center justify-around py-4">
                            {/* <!-- content --> */}
                            <div className="text-center">
                                <div className="mb-3">
                                    <i
                                        className="w-6 h-6 text-green-500 mx-auto"
                                        data-feather="check-circle"
                                    ></i>
                                </div>

                                <span className="text-2xl font-bold text-gray-800">
                                    76%
                                </span>
                                <p className="text-gray-600">Completed</p>
                            </div>
                            {/* <!-- content --> */}
                            <div className="text-center">
                                <div className="mb-3">
                                    <i
                                        className="w-6 h-6 text-yellow-500 mx-auto"
                                        data-feather="trending-up"
                                    ></i>
                                </div>

                                <span className="text-2xl font-bold text-gray-800">
                                    32%
                                </span>
                                <p className="text-gray-600">In-Progress</p>
                            </div>
                            {/* <!-- content --> */}
                            <div className="text-center">
                                <div className="mb-3">
                                    <i
                                        className="w-6 h-6 text-red-500 mx-auto"
                                        data-feather="trending-down"
                                    ></i>
                                </div>
                                <span className="text-2xl font-bold text-gray-800">
                                    13%
                                </span>
                                <p className="text-gray-600">Behind</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-6 my-6 grid grid-cols-1 lg:grid-cols-2 grid-rows-1 grid-flow-row-dense gap-6">
                <div>
                    <div className="card h-full shadow">
                        <div className="border-b border-gray-300 px-5 py-4 flex items-center w-full justify-between">
                            {/* <!-- title --> */}
                            <div>
                                <h4>My Task</h4>
                            </div>
                            <div>
                                {/* <!-- button --> */}
                                <div className="dropdown leading-4">
                                    <button
                                        className="btn btn-sm gap-x-2 bg-white text-gray-800 border-gray-300 border disabled:opacity-50 disabled:pointer-events-none hover:text-white hover:bg-gray-700 hover:border-gray-700 active:bg-gray-700 active:border-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Add Task
                                    </button>
                                    {/* <!-- list --> */}
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Action
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="dropdown-item"
                                                href="#"
                                            >
                                                Something else here
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="relative overflow-x-auto">
                            {/* <!-- table --> */}
                            <table className="text-left w-full whitespace-nowrap">
                                <thead className="text-gray-700">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="border-b bg-gray-100 px-6 py-3"
                                        >
                                            Name
                                        </th>
                                        <th
                                            scope="col"
                                            className="border-b bg-gray-100 px-6 py-3"
                                        >
                                            Deadline
                                        </th>
                                        <th
                                            scope="col"
                                            className="border-b bg-gray-100 px-6 py-3"
                                        >
                                            Status
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            <div className="flex items-center">
                                                <input
                                                    className="w-4 h-4 text-indigo-600 bg-white border-gray-300 rounded focus:ring-indigo-600 focus:outline-none focus:ring-2"
                                                    type="checkbox"
                                                    id="checkboxOne"
                                                />
                                                <label
                                                    htmlFor="checkboxOne"
                                                    className="text-base ml-2 text-slate-600"
                                                >
                                                    Design a FreshCart Home page
                                                </label>
                                            </div>
                                        </td>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            Today
                                        </td>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            <span className="bg-green-100 px-2 py-1 text-green-700 text-sm font-medium rounded-md">
                                                Approved
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            <div className="flex items-center">
                                                <input
                                                    className="w-4 h-4 text-indigo-600 bg-white border-gray-300 rounded focus:ring-indigo-600 focus:outline-none focus:ring-2"
                                                    type="checkbox"
                                                    id="checkboxTwo"
                                                />
                                                <label
                                                    htmlFor="checkboxTwo"
                                                    className="text-base ml-2 text-slate-600"
                                                >
                                                    Dash UI Dark Version Design
                                                </label>
                                            </div>
                                        </td>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            Yesterday
                                        </td>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            <span className="bg-red-100 px-2 py-1 text-red-700 text-sm font-medium rounded-md">
                                                Pending
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            <div className="flex items-center">
                                                <input
                                                    className="w-4 h-4 text-indigo-600 bg-white border-gray-300 rounded focus:ring-indigo-600 focus:outline-none focus:ring-2"
                                                    type="checkbox"
                                                    id="checkboxThree"
                                                />
                                                <label
                                                    htmlFor="checkboxThree"
                                                    className="text-base ml-2 text-slate-600"
                                                >
                                                    Dash UI landing page design
                                                </label>
                                            </div>
                                        </td>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            16 Sept, 2023
                                        </td>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            <span className="bg-yellow-100 px-2 py-1 text-yellow-700 text-sm font-medium rounded-md">
                                                In Progress
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            <div className="flex items-center">
                                                <input
                                                    className="w-4 h-4 text-indigo-600 bg-white border-gray-300 rounded-md focus:ring-indigo-400 focus:outline-none focus:ring-3 focus:outline-indigo-600"
                                                    type="checkbox"
                                                    id="checkboxFour"
                                                />
                                                <label
                                                    htmlFor="checkboxFour"
                                                    className="text-base ml-2 text-slate-600"
                                                >
                                                    Next.js Dash UI version
                                                </label>
                                            </div>
                                        </td>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            23 Sept, 2023
                                        </td>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            <span className="bg-green-100 px-2 py-1 text-green-700 text-sm font-medium rounded-md">
                                                Approved
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            <div className="flex items-center">
                                                <input
                                                    className="w-4 h-4 text-indigo-600 bg-white border-gray-300 rounded focus:ring-indigo-600 focus:outline-none focus:ring-2"
                                                    type="checkbox"
                                                    id="checkboxFive"
                                                />
                                                <label
                                                    htmlFor="checkboxFive"
                                                    className="text-base ml-2 text-slate-600"
                                                >
                                                    Develop a Dash UI Laravel
                                                </label>
                                            </div>
                                        </td>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            20 Sept, 2023
                                        </td>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            <span className="bg-red-100 px-2 py-1 text-red-700 text-sm font-medium rounded-md">
                                                Pending
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            <div className="flex items-center">
                                                <input
                                                    className="w-4 h-4 text-indigo-600 bg-white border-gray-300 rounded focus:ring-indigo-600 focus:outline-none focus:ring-2"
                                                    type="checkbox"
                                                    id="checkboxSix"
                                                />
                                                <label
                                                    htmlFor="checkboxSix"
                                                    className="text-base ml-2 text-slate-600"
                                                >
                                                    Coach home page design
                                                </label>
                                            </div>
                                        </td>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            12 Sept, 2023
                                        </td>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            <span className="bg-green-100 px-2 py-1 text-green-700 text-sm font-medium rounded-md">
                                                Approved
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            <div className="flex items-center">
                                                <input
                                                    className="w-4 h-4 text-indigo-600 bg-white border-gray-300 rounded focus:ring-indigo-600 focus:outline-none focus:ring-2"
                                                    type="checkbox"
                                                    id="checkboxSeven"
                                                />
                                                <label
                                                    htmlFor="checkboxSeven"
                                                    className="text-base ml-2 text-slate-600"
                                                >
                                                    Develop a Dash UI Laravel
                                                </label>
                                            </div>
                                        </td>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            11 Sept, 2023
                                        </td>
                                        <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                            <span className="bg-red-100 px-2 py-1 text-red-700 text-sm font-medium rounded-md">
                                                Pending
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* <!-- card --> */}
                <div className="card h-full shadow">
                    <div className="border-b border-gray-300 px-5 py-4">
                        <h4>Teams</h4>
                    </div>
                    <div
                        className="relative overflow-x-auto"
                        data-simplebar=""
                        style={{ maxHeight: "380px" }}
                    >
                        {/* <!-- table --> */}
                        <table className="text-left w-full whitespace-nowrap">
                            <thead className="text-gray-700">
                                <tr>
                                    <th
                                        scope="col"
                                        className="border-b bg-gray-100 px-6 py-3"
                                    >
                                        Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="border-b bg-gray-100 px-6 py-3"
                                    >
                                        Role
                                    </th>
                                    <th
                                        scope="col"
                                        className="border-b bg-gray-100 px-6 py-3"
                                    >
                                        Last Activity
                                    </th>
                                    <th
                                        scope="col"
                                        className="border-b bg-gray-100 px-6 py-3"
                                    ></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                        <div className="flex items-center">
                                            <div>
                                                <a
                                                    href="#!"
                                                    className="h-10 w-10 inline-block"
                                                >
                                                    <img
                                                        src="assets/images/avatar/avatar-2.jpg"
                                                        alt="Image"
                                                        className="rounded-full"
                                                    />
                                                </a>
                                            </div>
                                            <div className="ml-3 leading-4">
                                                <h5 className="mb-1">
                                                    <a href="#!">
                                                        Anita Parmar
                                                    </a>
                                                </h5>
                                                <p className="mb-0 text-gray-500">
                                                    anita@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                        Front End Developer
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                        3 May, 2023
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                        <div className="dropdown leading-4">
                                            <button
                                                className="text-gray-600 p-2 hover:bg-gray-300 rounded-full transition-all"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i
                                                    data-feather="more-vertical"
                                                    className="w-4 h-4"
                                                ></i>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Another action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Something else here
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                        <div className="flex items-center">
                                            <div>
                                                <a
                                                    href="#!"
                                                    className="h-10 w-10 inline-block"
                                                >
                                                    <img
                                                        src="assets/images/avatar/avatar-3.jpg"
                                                        alt="Image"
                                                        className="rounded-full"
                                                    />
                                                </a>
                                            </div>
                                            <div className="ml-3 leading-4">
                                                <h5 className="mb-1">
                                                    <a href="#!">
                                                        Jitu Chauhan
                                                    </a>
                                                </h5>
                                                <p className="mb-0 text-gray-500">
                                                    jituchauhan@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                        Project Director
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                        Today
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                        <div className="dropdown leading-4">
                                            <button
                                                className="text-gray-600 p-2 hover:bg-gray-300 rounded-full transition-all"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i
                                                    data-feather="more-vertical"
                                                    className="w-4 h-4"
                                                ></i>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Another action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Something else here
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                        <div className="flex items-center">
                                            <div>
                                                <a
                                                    href="#!"
                                                    className="h-10 w-10 inline-block"
                                                >
                                                    <img
                                                        src="assets/images/avatar/avatar-2.jpg"
                                                        alt="Image"
                                                        className="rounded-full"
                                                    />
                                                </a>
                                            </div>
                                            <div className="ml-3 leading-4">
                                                <h5 className="mb-1">
                                                    <a href="#!">
                                                        Sandeep Chauhan
                                                    </a>
                                                </h5>
                                                <p className="mb-0 text-gray-500">
                                                    sandeepchauhan@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                        Full- Stack Developer
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                        Yesterday
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                        <div className="dropdown leading-4">
                                            <button
                                                className="text-gray-600 p-2 hover:bg-gray-300 rounded-full transition-all"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i
                                                    data-feather="more-vertical"
                                                    className="w-4 h-4"
                                                ></i>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Another action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Something else here
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                        <div className="flex items-center">
                                            <div>
                                                <a
                                                    href="#!"
                                                    className="h-10 w-10 inline-block"
                                                >
                                                    <img
                                                        src="assets/images/avatar/avatar-5.jpg"
                                                        alt="Image"
                                                        className="rounded-full"
                                                    />
                                                </a>
                                            </div>
                                            <div className="ml-3 leading-4">
                                                <h5 className="mb-1">
                                                    <a href="#!">
                                                        Amanda Darnell
                                                    </a>
                                                </h5>
                                                <p className="mb-0 text-gray-500">
                                                    amandadarnell@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                        Digital Marketer
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                        3 May, 2023
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                        <div className="dropdown leading-4">
                                            <button
                                                className="text-gray-600 p-2 hover:bg-gray-300 rounded-full transition-all"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i
                                                    data-feather="more-vertical"
                                                    className="w-4 h-4"
                                                ></i>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Another action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Something else here
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                        <div className="flex items-center">
                                            <div>
                                                <a
                                                    href="#!"
                                                    className="h-10 w-10 inline-block"
                                                >
                                                    <img
                                                        src="assets/images/avatar/avatar-6.jpg"
                                                        alt="Image"
                                                        className="rounded-full"
                                                    />
                                                </a>
                                            </div>
                                            <div className="ml-3 leading-4">
                                                <h5 className="mb-1">
                                                    <a href="#!">
                                                        Patricia Murrill
                                                    </a>
                                                </h5>
                                                <p className="mb-0 text-gray-500">
                                                    patriciamurrill@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                        Account Manager
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                        3 May, 2023
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                        <div className="dropdown leading-4">
                                            <button
                                                className="text-gray-600 p-2 hover:bg-gray-300 rounded-full transition-all"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i
                                                    data-feather="more-vertical"
                                                    className="w-4 h-4"
                                                ></i>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Another action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Something else here
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                        <div className="flex items-center">
                                            <div>
                                                <a
                                                    href="#!"
                                                    className="h-10 w-10 inline-block"
                                                >
                                                    <img
                                                        src="assets/images/avatar/avatar-7.jpg"
                                                        alt="Image"
                                                        className="rounded-full"
                                                    />
                                                </a>
                                            </div>
                                            <div className="ml-3 leading-4">
                                                <h5 className="mb-1">
                                                    <a href="#!">
                                                        Darshini Nair
                                                    </a>
                                                </h5>
                                                <p className="mb-0 text-gray-500">
                                                    darshininair@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                        Front End Developer
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                        3 May, 2023
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                        <div className="dropdown leading-4">
                                            <button
                                                className="text-gray-600 p-2 hover:bg-gray-300 rounded-full transition-all"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i
                                                    data-feather="more-vertical"
                                                    className="w-4 h-4"
                                                ></i>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Another action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Something else here
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                        <div className="flex items-center">
                                            <div>
                                                <a
                                                    href="#!"
                                                    className="h-10 w-10 inline-block"
                                                >
                                                    <img
                                                        src="assets/images/avatar/avatar-8.jpg"
                                                        alt="Image"
                                                        className="rounded-full"
                                                    />
                                                </a>
                                            </div>
                                            <div className="ml-3 leading-4">
                                                <h5 className="mb-1">
                                                    <a href="#!">
                                                        Patricia Murrill
                                                    </a>
                                                </h5>
                                                <p className="mb-0 text-gray-500">
                                                    patriciamurrill@example.com
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                        Account Manager
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                        3 May, 2023
                                    </td>
                                    <td className="border-b border-gray-300 font-medium py-3 px-6 text-left">
                                        <div className="dropdown leading-4">
                                            <button
                                                className="text-gray-600 p-2 hover:bg-gray-300 rounded-full transition-all"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <i
                                                    data-feather="more-vertical"
                                                    className="w-4 h-4"
                                                ></i>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Another action
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        className="dropdown-item"
                                                        href="#"
                                                    >
                                                        Something else here
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
