import {useRoutes} from "react-router";

// project imports
import MainRoutes from "./MainRoutes";

export default function Routes() {
    return useRoutes([MainRoutes])
}