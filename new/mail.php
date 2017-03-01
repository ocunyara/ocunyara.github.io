<?php
if( ! empty($_POST) ) {

    $data = (object) $_POST;

    if( ! $data->name) return 'Поле "Имя" не заполнено.';
    if( ! $data->phone) return 'Поле "телефон" не заполнено.';

    $to = 'smolin_an@mail.ua';
    $subject = 'Обратный звонок';
    $message = 'Имя ' . $data->name . '. Телефон ' . $data->phone;

    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: Отправитель <from@example.com>\r\n";


    mail($to, $subject, $message, $headers);

    return 'Скрипт завершил свою работу.';

} else {
    return 'Форма пустая.';
}