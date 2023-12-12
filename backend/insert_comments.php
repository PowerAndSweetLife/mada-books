<?php
include "core/Database.class.php";
$db = new Database();

$nom = htmlspecialchars(trim($_POST['nom']));
$email = htmlspecialchars(trim($_POST['email']));
$content = htmlspecialchars(trim($_POST['commentaire']));


$db->insert("commentaires")
    ->fields(['nom', 'email', 'content', 'id_etablissements'])
    ->execute([$nom, $email, $content, 1]);


echo 'success';
