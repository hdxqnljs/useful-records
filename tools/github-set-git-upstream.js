/*

  1. 给一个仓库增加 upstream(远程)
    git remote add upstream https://github.com/python/cpython

  2. 设置仓库的 upstream push 为 git@github.com:<your-username>/cpython.git，即你自己forked（GitHub独有概念，跟git无关）后创建的新仓库;
    因为上一步的设置，upstream fetch 依然为 https://github.com/python/cpython，即原仓库
    git remote set-url --push upstream git@github.com:<your-username>/cpython.git

  3. 设置main分支的远程为 upstream 而非 origin，则拉取会从原始仓库拉取内容，推送会推送到fork仓库后创建给你的那个仓库
    git config --local branch.main.remote upstream
    
  4. 设置完成后，使用git remote -v查看，结果应该如下
    origin  git@github.com:hdxqnljs/cpython.git (fetch)
    origin  git@github.com:hdxqnljs/cpython.git (push)
    upstream  https://github.com/python/cpython (fetch)
    upstream  git@github.com:hdxqnljs/cpython.git (push)
  
  ps:
    When a repo is cloned, it has a default remote called origin that points to your fork on GitHub, 
    not the original repo it was forked from.
    To keep track of the original repo, you need to add another remote named upstream
*/