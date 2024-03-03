import { toggleSidebar } from "../../redux/slices/app.slice";
import { useAppDispatch, useAppSelector } from "../../redux/store";

export default function useHeader() {
  const isSidebarOpen = useAppSelector((state) => state.app.isSidebarOpen);
  const dispatch = useAppDispatch();

  const handleToggleSidebar = () => {
    dispatch(toggleSidebar());
  };
  return { isSidebarOpen, handleToggleSidebar };
}
