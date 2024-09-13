## Маршруты для запросов

## 1. Получить задачи

Method: GET
<br>
<br>
Route: /tasks

## 2. Добавить задачу

Method: POST
<br>
<br>
Route: /tasks
<br>
<br>
Body: {
<br>
  description: string,
<br>
  dateCreated: Date,
<br>
  isCompleted: boolean
<br>
}

## 3. Редактировать задачу

Method: PUT
<br>
<br>
Route: /tasks/:id (вместо :id должно быть id задачи)
<br>
<br>
Body: {
<br>
  description: string,
<br>
  dateCreated: Date,
<br>
  isCompleted: boolean
<br>
}

## 4. Удалить задачу

Method: DELETE
<br>
<br>
Route: /tasks/:id (вместо :id должно быть id задачи)
