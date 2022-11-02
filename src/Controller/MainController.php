<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Messages;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class MainController extends AbstractController
{
    #[Route('/', name: 'app_main')]
    public function index(Request $request, EntityManagerInterface $entityManager)
    {
        if($request->isXmlHttpRequest())
        {
            $data = json_decode($request->getContent(),true);
            $name = $data["name"];
            $email = $data["email"];
            $message = $data["message"];

            if($name && $email && $message)
            {
                $messageEntity = new Messages;
                $messageEntity->setName($name);
                $messageEntity->setEmail($email);
                $messageEntity->setMessage($message);

                $entityManager->persist($messageEntity);
                $entityManager->flush();

                return new JsonResponse([], Response::HTTP_OK, []);
            }
        }



        return $this->render('main/main.html.twig', [
        ]);
    }
}
