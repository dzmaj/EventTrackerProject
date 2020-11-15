-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema eventdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `eventdb` ;

-- -----------------------------------------------------
-- Schema eventdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `eventdb` DEFAULT CHARACTER SET utf8 ;
USE `eventdb` ;

-- -----------------------------------------------------
-- Table `job`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `job` ;

CREATE TABLE IF NOT EXISTS `job` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `position` VARCHAR(45) NULL,
  `description` VARCHAR(5000) NULL,
  `city` VARCHAR(45) NULL,
  `state` VARCHAR(45) NULL,
  `company` VARCHAR(100) NULL,
  `url` VARCHAR(5000) NULL,
  `source` VARCHAR(45) NULL,
  `created_timestamp` DATETIME NULL,
  `updated_timestamp` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `job_update`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `job_update` ;

CREATE TABLE IF NOT EXISTS `job_update` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `status` VARCHAR(45) NULL,
  `note` VARCHAR(500) NULL,
  `date` DATETIME NULL,
  `job_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_update_job_idx` (`job_id` ASC),
  CONSTRAINT `fk_update_job`
    FOREIGN KEY (`job_id`)
    REFERENCES `job` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS eventuser@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'eventuser'@'localhost' IDENTIFIED BY 'eventuser';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'eventuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `job`
-- -----------------------------------------------------
START TRANSACTION;
USE `eventdb`;
INSERT INTO `job` (`id`, `position`, `description`, `city`, `state`, `company`, `url`, `source`, `created_timestamp`, `updated_timestamp`) VALUES (1, 'Junior Web Developer', 'JUNIOR WEB DEVELOPER, OUTDOOR SPORTSMAN GROUP\n\nWe will be accepting applications until the position has been filled.\n\nAbout Us\n\nKroenke Sports & Entertainment (KSE) is an American Sports and entertainment holding company based in Denver, Colorado. Kroenke Sports & Entertainment is committed to providing world class sports and entertainment for both live and broadcast audiences. We will welcome fans into our venues as family, providing respect and care from the purchase of a ticket, to the drive home. We will celebrate the best in sport and entertainment by recognizing the diversity and human spirit around us, and by working within our community to improve the lives of all those within the community. We will strive to perform this mission within a viable and self-sustaining business model.\n\nAbout Our Job\n\nThis Junior Web Developer is responsible for maintaining and developing new features on the Outdoor Sportsman Group family of websites.\n\nJob Responsibilities Will Include\nDeveloping site features and functionality for our family of websites.\nPerforming site maintenance including bug fixes.\nEvaluate scope and requirements based on project documentation.\nFollow documented deployment procedures.\nDevelop user testing procedures.\nDocument internal processes.\nAbout You\n\nOur ideal candidate will have the following:\nKnowledge, Skill and Ability: ASP.Net C#, HTML, CSS, JavaScript, jQuery, SQL and general database knowledge, Version Control (Git)\nCreating and consuming REST services a plus\nExcellent interpersonal skills including strong verbal, listening, and written communication\nSelf-motivated with the ability to handle multiple ongoing projects in a fast-paced team environment\nAbility to work independently on projects as well as collaborate with the team\nExcellent attention to detail, flexible, and adaptable to changes\nAbility to operate under pressure and meet or exceed deadlines\nQualifications\n\nWe appreciate your interest in working with KSE but please do not apply if you do not have the following required minimum qualifications\nEducation Requirement - Bachelor’s degree in computer science or equivalent.\nExperience Requirement - Two or more years of experience developing websites.\n\n\nSeniority Level\nEntry level\n\nIndustry\nMarketing & Advertising  Online Media  Entertainment\nEmployment Type\nFull-time\n\nJob Functions\nEngineering  Information Technology', 'Denver', 'CO', 'Kroenke Sports & Entertainment Company', 'https://www.linkedin.com/jobs/view/2231237934/?alternateChannel=search&refId=3fe83e99-7fff-4eea-bd4b-ad298c5d9d53&trackingId=u2hINnH37oNnWkaePENRnQ%3D%3D', 'linkedin', NULL, NULL);
INSERT INTO `job` (`id`, `position`, `description`, `city`, `state`, `company`, `url`, `source`, `created_timestamp`, `updated_timestamp`) VALUES (2, 'Junior Full Stack Developer', 'Revature is looking to hire over 300 Junior Full Stack Developers in the next 4 weeks. As the fastest growing employer of emerging tech talent, we recruit all across the country.\n\nOne day someone is going to ask you where you got your start…This is IT!\n\nWith a wide range of Fortune 500 enterprises, government organizations and top systems integrators as our clients, we not only provide you with the skills needed to succeed through an employer-paid training program but will also give you the opportunity to put those skills to use, on projects that matter.\nWhat We Are Looking For\n\nCollege degree (Associates or Bachelors)\nMust be authorized to work in the US\nStrong desire to learn to code – No prior professional experience required.\nA natural problem solver\nStrong communication and interpersonal skills\nWilling to relocate anywhere in the US – Relocation assistance provided\nWhat We Offer\n\nCompetitive salary\nRelocation & housing assistance\nHealth, vision & dental insurance\nPaid time off\nIndustry Certifications\nLife Insurance Policy\n401k\nMentoring program and ongoing support throughout your entire Revature career\nExperience with the largest and most reputable companies in the US\nApply Today. Interviews are going on now.\n#SoftwareEngineering\n\nEqual Employment Opportunity\n\nThe Company is an equal opportunity employer. We will extend equal opportunity to all individuals without regard to race, religion, color, sex, pregnancy, childbirth or related medical conditions, sexual orientation, gender identity, national origin, disability, age, genetic information, marital status, veteran status, or any other status protected under applicable federal, state, or local laws. This policy applies to all terms and conditions of employment, including but not limited to, hiring, placement, promotion, termination, layoff, recall, transfer, leaves of absence, benefits, compensation and training. If you require an accommodation to work based on any of these protected factors, please notify the Human Resources Department, and the Company will evaluate the request and provide an accommodation in accordance with applicable law.\n\nWe seek to comply with all applicable federal, state and local laws related to discrimination and will not tolerate the interference with the ability of any of the Company’s employees to perform their job duties. Our policy reflects and affirms the Company’s commitment to the principles of fair employment and the elimination of all discriminatory practices.', 'Denver', 'CO', 'Revature', NULL, 'indeed', NULL, NULL);

COMMIT;


-- -----------------------------------------------------
-- Data for table `job_update`
-- -----------------------------------------------------
START TRANSACTION;
USE `eventdb`;
INSERT INTO `job_update` (`id`, `status`, `note`, `date`, `job_id`) VALUES (1, 'applied', 'Really like this job', NULL, 1);

COMMIT;

