import institute_info from "@/views/institute_info";
import test from "@/views/test";
const routes = [
    {
        path: "/institute_info",
        name: "institute_info",
        component: institute_info,
    },
    {
        path: "/test",
        name: "test",
        component: test,
    },
];

export default routes;