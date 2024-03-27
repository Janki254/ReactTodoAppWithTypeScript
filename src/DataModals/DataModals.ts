export interface CreateTaskProps {
    isFormOpen: boolean;

    toggleFun: () => void;
    submitTask: (taskdata: Task) => void;
}

export interface Task {
    id: string;
    title: string;
    description: string;
    status: string;
}
export interface todoProps {
    todo: Task;
    colorIndx: number;
}
