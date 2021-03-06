### 1. Сделайте ["форк"](http://help.github.com/fork-a-repo/) репозитория Profile.Prototype, а затем клонируйте его в свою локальную среду разработки
<pre>
git clone git@github.com:имя-вашего-пользователя/Profile.Prototype.git
</pre>

### 2. Добавьте основной репозиторий Profile.Prototype как удаленный (remote) с названием "upstream"
Перейдите в директорию куда вы сделали клон на первом шаге и выполните следующую команду:
<pre>
git remote add upstream git://github.com/Horse21/Profile.Prototype.git
</pre>

### 3. Получите последние изменения кода из основного репозитория Profile.Prototype
<pre>
git fetch upstream
</pre>
Вы должны начинать с этого шага для каждого нового патча, чтобы быть уверенными, что работаете с кодом, содержащим последние изменения.

### 4. Создайте новую ветку, основанную на текущей develop ветке Profile.Prototype
<pre>
git checkout upstream/develop
git checkout -b 999-название-вашей-ветки
</pre>

### 5. Пишем код
Убеждаемся, что он работает :)

### 6. Cделайте коммит изменений
Добавляем файлы c изменениями:
<pre>
# один файл
git add путь/до/вашего/файла.cs
# все измененные файлы
git add .
</pre>
Если добавить в описание коммита номер тикета #XXX, тогда GitHub автоматически свяжет его с тикетом над которым вы работаете:
<pre>
git commit -m "Описание коммита для тикета #42"
</pre>

### 7. Получите последние изменения кода из upstream (добавили на втором шаге)
<pre>
git pull upstream develop
</pre>
Опять же таким образом убеждаемся, что ваша ветка содержит последние изменения. Если возникли конфликты, исправляем и снова коммитим.

### 8. Имея код без конфликтов отправьте изменения на GitHub
<pre>
git push -u origin 999-название-вашей-ветки
</pre>

### 9. Пришлите [pull request](http://help.github.com/send-pull-requests/) в основной репозиторий Profile.Prototype
Перейдите в свой репозиторий на GitHub'e и нажмите "Pull Request", выберите свою ветку справа и добавьте описание вашего "Pull Request'a", чтобы GitHub автоматически связал его с тикетом добавьте в комментарий номер тикета '#999'.

### 10. Ожидайте рассмотрения вашего кода
Кто-то рассмотрит ваш код и может быть попросит внести изменения, если это произошло возвращайтесь к 5 шагу.

### 11. Удаление ветки
После того как ваш код приняли или отклонили, вы можете удалить ветку из локального репозитория и GitHub'a
<pre>
git checkout develop
git branch -D 999-название-вашей-ветки
git push origin --delete 999-название-вашей-ветки
</pre>

### Все шаги кратко

<pre>
git clone git@github.com:ваше-имя-пользователя/Profile.Prototype.git
git remote add upstream git://github.com/Horse21/Profile.Prototype.git
</pre>
<pre>
git fetch upstream
git checkout upstream/develop
git checkout -b 999-название-вашей-ветки
 
/* пишем код */

git add путь/до/вашего/файла.cs
git commit -m "Описание коммита для тикета #42"
git pull upstream develop
git push -u origin 999-название-вашей-ветки
</pre>
