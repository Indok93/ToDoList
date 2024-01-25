import { ContentWrapper } from "../ContentWrapper/ContentWrapper"

export const ToDoList = () => {

    const handleSubmit = e => {
        console.log(e.target);
    }

  return (
    <ContentWrapper title="ToDoList">
        <form onSubmit={handleSubmit}>
            <input type="text" id="task" />
            <button type="submit">Tilføj</button>
        </form>
    </ContentWrapper>
  )
}
