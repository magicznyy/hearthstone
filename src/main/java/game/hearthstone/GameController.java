package game.hearthstone;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class GameController {

    @GetMapping("/home")
    public String homePage(){
       return "html/home.html";
    }


}
