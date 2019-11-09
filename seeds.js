var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://assets.simpleviewinc.com/simpleview/image/fetch/c_fill,h_452,q_75,w_982/http://res.cloudinary.com/simpleview/image/upload/v1469218578/clients/lanecounty/constitution_grove_campground_by_natalie_inouye_417476ef-05c3-464d-99bd-032bb0ee0bd5.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et fermentum dui. Ut orci quam, ornare sed lorem sed, hendrerit auctor dolor. Nulla viverra, nibh quis ultrices malesuada, ligula ipsum vulputate diam, aliquam egestas nibh ante vel dui. Sed in tellus interdum eros vulputate placerat sed non enim. Pellentesque eget justo porttitor urna dictum fermentum sit amet sed mauris. Praesent molestie vestibulum erat ac rhoncus. Aenean nunc risus, accumsan nec ipsum et, convallis sollicitudin dui. Proin dictum quam a semper malesuada. Etiam porta sit amet risus quis porta. Nulla facilisi. Cras at interdum ante. Ut gravida pharetra ligula vitae malesuada. Sed eget libero et arcu tempor tincidunt in ac lectus. Maecenas vitae felis enim. In in tellus consequat, condimentum eros vitae, lacinia risus. Sed vehicula sem sed risus volutpat elementum. Nunc accumsan tempus nunc ac aliquet. Integer non ullamcorper eros, in rutrum velit. Proin cursus orci sit amet lobortis iaculis. Praesent condimentum eget felis ut laoreet. Aliquam sodales dolor id mi iaculis, non fermentum leo viverra. Aenean aliquet condimentum placerat. Aenean aliquet diam arcu. Curabitur ac ligula sem. Mauris tincidunt mauris at ligula tincidunt interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus sagittis, eros ut iaculis varius, lorem nibh ullamcorper sapien, nec posuere justo massa quis ligula. Curabitur eleifend quis sapien egestas tincidunt. Nulla ornare, purus eget porttitor facilisis, lorem urna semper erat, non placerat orci est lobortis mi. Curabitur convallis, urna a tincidunt accumsan, lectus orci dictum turpis, vitae pretium leo tellus a sem. Donec vulputate erat quis turpis luctus, at aliquam massa vulputate. Phasellus vestibulum, purus in vestibulum tempor, est ligula rutrum justo, hendrerit malesuada diam lacus quis massa. Ut fringilla fringilla mattis. Aenean nisl lectus, tempor et sapien at, venenatis tempus magna. Integer sollicitudin rhoncus augue vel pretium. Etiam nisl velit, condimentum."
    },
    {
        name: "John Prince Park",
        image: "http://media.cmgdigital.com/shared/img/photos/2012/04/08/cb/33/john-prince-415.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et fermentum dui. Ut orci quam, ornare sed lorem sed, hendrerit auctor dolor. Nulla viverra, nibh quis ultrices malesuada, ligula ipsum vulputate diam, aliquam egestas nibh ante vel dui. Sed in tellus interdum eros vulputate placerat sed non enim. Pellentesque eget justo porttitor urna dictum fermentum sit amet sed mauris. Praesent molestie vestibulum erat ac rhoncus. Aenean nunc risus, accumsan nec ipsum et, convallis sollicitudin dui. Proin dictum quam a semper malesuada. Etiam porta sit amet risus quis porta. Nulla facilisi. Cras at interdum ante. Ut gravida pharetra ligula vitae malesuada. Sed eget libero et arcu tempor tincidunt in ac lectus. Maecenas vitae felis enim. In in tellus consequat, condimentum eros vitae, lacinia risus. Sed vehicula sem sed risus volutpat elementum. Nunc accumsan tempus nunc ac aliquet. Integer non ullamcorper eros, in rutrum velit. Proin cursus orci sit amet lobortis iaculis. Praesent condimentum eget felis ut laoreet. Aliquam sodales dolor id mi iaculis, non fermentum leo viverra. Aenean aliquet condimentum placerat. Aenean aliquet diam arcu. Curabitur ac ligula sem. Mauris tincidunt mauris at ligula tincidunt interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus sagittis, eros ut iaculis varius, lorem nibh ullamcorper sapien, nec posuere justo massa quis ligula. Curabitur eleifend quis sapien egestas tincidunt. Nulla ornare, purus eget porttitor facilisis, lorem urna semper erat, non placerat orci est lobortis mi. Curabitur convallis, urna a tincidunt accumsan, lectus orci dictum turpis, vitae pretium leo tellus a sem. Donec vulputate erat quis turpis luctus, at aliquam massa vulputate. Phasellus vestibulum, purus in vestibulum tempor, est ligula rutrum justo, hendrerit malesuada diam lacus quis massa. Ut fringilla fringilla mattis. Aenean nisl lectus, tempor et sapien at, venenatis tempus magna. Integer sollicitudin rhoncus augue vel pretium. Etiam nisl velit, condimentum."
    },
    {
        name: "Boynton Beach Rec Center",
        image: "https://www.readingviaduct.org/wp-content/uploads/2018/06/Schaefer-Park-Playground-1024x675.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et fermentum dui. Ut orci quam, ornare sed lorem sed, hendrerit auctor dolor. Nulla viverra, nibh quis ultrices malesuada, ligula ipsum vulputate diam, aliquam egestas nibh ante vel dui. Sed in tellus interdum eros vulputate placerat sed non enim. Pellentesque eget justo porttitor urna dictum fermentum sit amet sed mauris. Praesent molestie vestibulum erat ac rhoncus. Aenean nunc risus, accumsan nec ipsum et, convallis sollicitudin dui. Proin dictum quam a semper malesuada. Etiam porta sit amet risus quis porta. Nulla facilisi. Cras at interdum ante. Ut gravida pharetra ligula vitae malesuada. Sed eget libero et arcu tempor tincidunt in ac lectus. Maecenas vitae felis enim. In in tellus consequat, condimentum eros vitae, lacinia risus. Sed vehicula sem sed risus volutpat elementum. Nunc accumsan tempus nunc ac aliquet. Integer non ullamcorper eros, in rutrum velit. Proin cursus orci sit amet lobortis iaculis. Praesent condimentum eget felis ut laoreet. Aliquam sodales dolor id mi iaculis, non fermentum leo viverra. Aenean aliquet condimentum placerat. Aenean aliquet diam arcu. Curabitur ac ligula sem. Mauris tincidunt mauris at ligula tincidunt interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus sagittis, eros ut iaculis varius, lorem nibh ullamcorper sapien, nec posuere justo massa quis ligula. Curabitur eleifend quis sapien egestas tincidunt. Nulla ornare, purus eget porttitor facilisis, lorem urna semper erat, non placerat orci est lobortis mi. Curabitur convallis, urna a tincidunt accumsan, lectus orci dictum turpis, vitae pretium leo tellus a sem. Donec vulputate erat quis turpis luctus, at aliquam massa vulputate. Phasellus vestibulum, purus in vestibulum tempor, est ligula rutrum justo, hendrerit malesuada diam lacus quis massa. Ut fringilla fringilla mattis. Aenean nisl lectus, tempor et sapien at, venenatis tempus magna. Integer sollicitudin rhoncus augue vel pretium. Etiam nisl velit, condimentum."
    }
]

function seedDB(){
    //Remove all campgrounds:
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("Removed Campgrounds");
        //Add a few campgrounds:
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                }else{
                    console.log("added a campground");
                    //Create a comment:
                    Comment.create(
                        {
                            text: "This place is great, but I wish there was wifi",
                            author: "Homer"
                        }, function(err, comments){
                            if(err){
                                console.log(err)
                            }else{
                                campground.comments.push(comments);
                                campground.save();
                                console.log("Created new comment")
                            }
                            
                        }
                    )
                }
            })
        })
    });
    
   
    //Add a few comments
}

module.exports = seedDB;